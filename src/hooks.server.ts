import type { Handle } from '@sveltejs/kit';
import { Cookies } from '@sveltejs/kit';
// const getUsername = async (session_cookie: string) => {
// 	const response = await fetch('http://localhost:8080/api/v1/getUser', {
// 		method: 'GET',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 			'Cookie': session_cookie
// 		},
// 		credentials: "include",
// 	});
// 	if (response.headers.get('content-type')?.includes('application/json')) {
// 		const json = await response.json();
// 		return { response, json };
// 	} else {
// 		return { response };
// 	}
// };

export const handle: Handle = async ({ event, resolve }) => {
	const { headers } = event.request;

	const session = event.cookies.get('auth_token');
	console.log(session);
	if (!session) {
		return await resolve(event);
	} 

	// hier Nutzer Info aus der DB holen
	const jsonData = await fetch('http://localhost:8080/api/v1/getUser', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			cookies: session,
		},
		credentials: "same-origin",
	});
	if (jsonData.headers.get('content-type')?.includes('application/json')) {
		const json = await jsonData.json();
		if (json.response.status >= 400) {
			console.log(`error ${json.response.status}`)
			return await resolve(event);
		}
		console.log(json);
		event.locals.user = {
			username: json.,
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
