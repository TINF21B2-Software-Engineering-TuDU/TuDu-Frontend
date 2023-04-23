import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// the logout is only used to inform the DB and does not need to be displayed to the user
	// hence, the user is immediately redirected to the landing page
	throw redirect(302, '/');
};

const getLogout = async (username?: string) => {
	const response = await fetch('http://localhost:8080/api/v1/logout', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin',
		body: JSON.stringify({ email: username })
	});
	return response;
}

export const actions: Actions = {
	async default({ cookies, request }) {
		const data = await request.formData();
		const username = data.get('username')?.toString();

		// TODO: change form to load function from the hook
		if (!username) {
			throw redirect(302, "/main");
		}
		const logout = await getLogout( username );

		if (logout.status >= 400) {
			return redirect
		}


		// eat the cookie
		cookies.set('auth_token', '', {
			path: '/',
			expires: new Date(0)
		});
		cookies.set('refresh_token', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(302, '/login');
	}
};
