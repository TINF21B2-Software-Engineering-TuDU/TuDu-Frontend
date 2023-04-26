import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';

export const load: PageServerLoad = async () => {
};

const postLogin = async (username: string, password: string) => {
	const response = await fetch('http://localhost:8080/auth/v1/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin',
		body: JSON.stringify({ email: username, passwd: password })
	});
	if (response.headers.get('content-type')?.includes('application/json')) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true });
	}

	// hier user aus DB anfordern
	const jsonData = await postLogin(username, password);

	// error-handling
	// if user already exists
	// other error
	if (jsonData.response.status >= 400) {
		return fail(400, { credentials: true });
	}

	if (jsonData.response.headers.get('set-cookie') == null) {
		return fail(400, { credentials: true });
	}

	const tokens = jsonData.response.headers.get('set-cookie').split(' ');
	const auth_token = tokens[0].slice(11).slice(0, -1);
	const refresh_token = tokens[2].slice(14).slice(0, -1);

	cookies.set('auth_token', auth_token, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
		// domain: '127.0.0.1'
	});

	cookies.set('refresh_token', refresh_token, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
		// domain: '127.0.0.1'
	});

	// redirect the user
	throw redirect(302, '/main');
};

export const actions: Actions = { login };
