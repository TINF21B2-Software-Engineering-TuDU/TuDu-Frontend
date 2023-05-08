import type {Handle, HandleFetch} from '@sveltejs/kit';
import {PUBLIC_API_URL} from "$env/static/public";
import jwt from "jsonwebtoken";

export const handleFetch = (async ({event, request, fetch}) => {
    if (request.url.startsWith(PUBLIC_API_URL)) {
        request.headers.set('token', <string>event.cookies.get('AuthorizationToken')); // JSON.stringify({token: event.cookies.get('AuthorizationToken')}));
    }
    return fetch(request);
}) satisfies HandleFetch;


const getUser = async (auth_token: string) => {
    const response = await fetch(PUBLIC_API_URL + '/auth/v1/getUser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify({token: auth_token})
    });
    if (response.headers.get('content-type')?.includes('application/json') && response.ok) {
        const json = await response.json();
        return {response, json};
    } else {
        return {response};
    }
};

export const handle: Handle = async ({event, resolve}) => {
    const session = event.cookies.get('AuthorizationToken');
    const user = event.locals.user;

    if (user && session) { // user & session cookie exists: go on
        return await resolve(event);
    }

    if (!session) { // no session: user needs to login
        event.locals.user = {
            username: "User",
            isLoggedIn: false,
            loginTime: new Date(),
        };
        return await resolve(event);
    }

    let email: string;
    ({email} = jwt.decode(<string>event.cookies.get('AuthorizationToken'))['auth']['email']);
    event.locals.user = {
        username: email,
        isLoggedIn: true,
        loginTime: new Date(),
    };
    return await resolve(event);
};
