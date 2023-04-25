import type { Handle } from '@sveltejs/kit';

const getUser = async (session_cookie: string) => {
	const response = await fetch('http://localhost:8080/api/v1/getUser', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			cookies: session_cookie,
		},
		credentials: "include",
	});
	if (response.headers.get('content-type')?.includes('application/json') && response.ok) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

export const handle: Handle = async ({ event, resolve }) => {
	// read session cookie
	const session = event.cookies.get('auth_token');
	if (!session) {
		event.locals.user = {
			username: "User",
			isLoggedIn: false,
			loginTime: new Date(),
		};
		return await resolve(event);
	}

	// get user info using session cookie
	const response = await getUser(session);

	// DB error 
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
