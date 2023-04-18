import type { Action, Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

const numSaltRound = 8;

export const load: PageServerLoad = async () => {
	// TODO:
};

const postSignUp = async (username: string, hashedPassword: Promise<string>) => {
	const response = await fetch('http://localhost:8080/auth/v1/register', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: username, passwd: hashedPassword })
	});
	if (response.headers.get('content-type')?.includes('application/json')) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

const signup: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');

	console.log(username, password);

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true });
	}

	const hashedPassword = bcrypt.hash(password, numSaltRound);

	// create USER in DB
	const jsonData = await postSignUp(username, hashedPassword);

	console.log(jsonData);
	// error-handling
	// if user already exists
	// other error
	if (jsonData.response.status >= 400) {
		return fail(400, { user: true, info: jsonData.json.text });
	}

	// everythings good -> redirect to login
	throw redirect(302, '/login');
};

export const actions: Actions = { signup };
