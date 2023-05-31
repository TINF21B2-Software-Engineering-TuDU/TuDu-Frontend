import { redirect, type Handle, type HandleFetch } from '@sveltejs/kit';
import { PUBLIC_API_URL } from "$env/static/public";
import jwt from "jsonwebtoken";
import { TOKEN, TOKEN_BEARER } from '$env/static/private';

export const handleFetch = (async ({ event, request, fetch }) => {
    if (request.url.startsWith(PUBLIC_API_URL)) {
        request.headers.set(TOKEN_BEARER, <string>event.cookies.get(TOKEN_BEARER));
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
        body: JSON.stringify({ TOKEN_BEARER: auth_token })
    });
    if (response.headers.get('content-type')?.includes('application/json') && response.ok) {
        const json = await response.json();
        return { response, json };
    } else {
        return { response };
    }
};

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get(TOKEN_BEARER);
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
        if (event.route.id == null) {
            throw redirect(302, '/');
        }
        if (event.route.id.startsWith('/main')) {
            throw redirect(302, '/login');
        }
        return await resolve(event);
    }

    let email: string;
    ({ email } = jwt.decode(<string>event.cookies.get(TOKEN))['auth']['email']);
    event.locals.user = {
        username: email,
        isLoggedIn: true,
        loginTime: new Date(),
    };
    return await resolve(event);
};
