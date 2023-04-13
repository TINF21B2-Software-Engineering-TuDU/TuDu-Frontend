import type { Action, Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
};

export const load: PageServerLoad = async () => {
	// TODO: 
};

const signup: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('name');
	const password = data.get('password');

	if (
		typeof username !== 'string' ||
		typeof password !== 'string' ||
		!username ||
		!password
	) {
		return fail(400, { invalid: true });
	}

	// create USER in DB

    const user = await fetch('localhost:8080/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: username, password: password, role: Roles.USER})
    })

	// error-handling
	// if user already exists
	// other error
	if (user) {
		return fail(400, { user: true });
	}

	// everythings good -> redirect to login
	throw redirect(302, '/login');

	// await db.user.create({
	// 	data: {
	// 		username,
	// 		passwordHash: await bcrypt.hash(password, 10),
	// 		userAuthToken: crypto.randomUUID(),
	// 		role: { connect: { name: Roles.USER } },
	// 	},
	// })
}