import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// logout is only serverside and deteles cookies and informs API
	// user does not need to see this page
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
		// TODO: change form to load function from the hook
		if (!username) {
			throw redirect(302, "/main");
		}
		const logout = await getLogout(username);

		if (logout.status >= 400) {
			return redirect
		}

		// eat the cookie
		await cookies.delete('auth_token');
		await cookies.delete('refresh_token');

		throw redirect(302, '/login');
	}
};
