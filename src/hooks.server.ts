import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { headers } = event.request;

	const session = event.cookies.get('auth_token');
	console.log(session);
	if (!session) {
		event.locals.user = {
			username: "User",
			isLoggedIn: false,
			loginTime: new Date(),
		};
		return await resolve(event);
	} 

	// hier Nutzer Info aus der DB holen
	const response = await fetch('http://localhost:8080/api/v1/getUser', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			cookies: session,
		},
		credentials: "same-origin",
	});
	if (response.headers.get('content-type')?.includes('application/json')) {
		const json = await response.json();
		console.log(json);
		if (response.status >= 400) {
			console.log(`error ${response.status}`)
			return await resolve(event);
		}
		event.locals.user = {
			username: json["email"],
			isLoggedIn: true,
			loginTime: new Date(),
		};
		return await resolve(event);
	} else {
		event.locals.user = {
			username: "User",
			isLoggedIn: false,
			loginTime: new Date(),
		};
		console.log(`error`)
		return await resolve(event);
	}
};
