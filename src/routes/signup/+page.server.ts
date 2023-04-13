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

const signup: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('name');
	const password = data.get('password');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true });
	}

	const hashedPassword = bcrypt.hash(password, numSaltRound);

	// create USER in DB
	const response = await fetch('localhost:8080/v1/register', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: username, password: hashedPassword })
	});
	const jsonData = await response.json();

	console.log(jsonData);

	// error-handling
	// if user already exists
	// other error
	if (jsonData) {
		return fail(400, { user: true });
	}

	// everythings good -> redirect to login
	throw redirect(302, '/login');
};
