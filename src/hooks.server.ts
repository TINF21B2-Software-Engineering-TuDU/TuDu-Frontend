import type { Handle, HandleFetch } from '@sveltejs/kit';
import {PUBLIC_API_URL} from "$env/static/public";

export const handleFetch = (async ({ event, request, fetch }) => {
	if (request.url.startsWith(PUBLIC_API_URL)) {
		request.headers.set('auth_token', event.request.headers.get("cookie").split(' ')[0].slice(11).slice(0, -1));
		request.headers.append('email', event.locals.user.username);
	}
	return fetch(request);
}) satisfies HandleFetch;


const getUser = async (auth_token: string) => {
	const response = await fetch('http://localhost:8080/auth/v1/getUser', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: "same-origin",
		body: JSON.stringify({ auth_token: auth_token })
	});
	if (response.headers.get('content-type')?.includes('application/json') && response.ok) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

export const handle: Handle = async ({ event, resolve }) => {
	const user = event.locals.user;

	if (user) { // user exists: go on
		return await resolve(event);
	}

	// read session cookie
	const session = event.cookies.get('AuthorizationToken');

	if (!session) { // no session: user needs to login
		event.locals.user = {
			username: "User",
			isLoggedIn: false,
			loginTime: new Date(),
		};
		return await resolve(event);
	}

	// no user: get user information from database
	const response = await getUser(session);

	// database error
	if (response.response.status >= 400 || !response.response.ok) {
		event.locals.user = {
			username: "User",
			isLoggedIn: false,
			loginTime: new Date(),
		};
		return await resolve(event);
	}

	// user info retrieved, set local user
	event.locals.user = {
		username: response.json["email"],
		isLoggedIn: true,
		loginTime: new Date(),
	};
	return await resolve(event);
};
