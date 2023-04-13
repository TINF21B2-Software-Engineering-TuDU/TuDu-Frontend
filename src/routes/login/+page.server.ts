import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt';


export const load: PageServerLoad = async () => {
	// const user = event.locals.user;

	// if (user) {
	// 	throw redirect(302, '/')
	// }
}

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');

	if (typeof username !== 'string' ||
		typeof password !== 'string' ||
		!username || !password) {
		return fail(400, { invalid: true });
	}

	// hier user aus DB anfordern

	const response = await fetch('localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: username, password: password})
    })
	// if(!user) {
	// 	return fail(400, { credentials: true });
	// }
	
	const user = await response.json();

	cookies.set('session', user.userAuthToken, {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after a month
		maxAge: 60 * 60 * 24 * 30,
	})

	// redirect the user
	throw redirect(302, '/main')
}

export const actions: Actions = { login }