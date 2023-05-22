import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import {PUBLIC_API_URL} from "$env/static/public";
import { TOKEN, TOKEN_BEARER } from '$env/static/private';

export const load: PageServerLoad = async () => {
};

const postLogin = async (username: string, password: string) => {
	const response = await fetch(PUBLIC_API_URL + '/auth/v1/login', {
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

	// request JWT from database
	const response = await postLogin(username, password);

	// error-handling
	if (response.response.status >= 400 || !response.response.ok) {
		return fail(response.response.status, { credentials: true });
	}

	const {token: authentication_token} = response.json;
	const authentication_token_bearer = "Bearer " + authentication_token;

	// Set JWT
	cookies.set(TOKEN, authentication_token, {
		httpOnly: true,
		path: '/',
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 30 // = 30 days
	});

	// Set Bearer Token
	cookies.set(TOKEN_BEARER, authentication_token_bearer, {
		httpOnly: true,
		path: '/',
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 30 // = 30 days
	});

	// redirect the user
	throw redirect(302, '/main');
};

export const actions: Actions = { login };
