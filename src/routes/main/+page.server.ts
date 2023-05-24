import { PUBLIC_API_URL } from '$env/static/public';
import { fail, redirect } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import { TOKEN, TOKEN_BEARER } from '$env/static/private';

export const load = (async ({ fetch, locals }) => {
	if (!locals.user.isLoggedIn) {
		throw redirect(302, '/login');
	} else {
		const listsResponse = await fetch(PUBLIC_API_URL+'/api/v1/list/');
		if (listsResponse.status >= 400 || !listsResponse.ok) {
			return { lists: null };
		}
		const listsData = await listsResponse.json();
		const lists = listsData.lists;
	
		return { lists: lists };
	}
}) satisfies PageLoad;

export const actions = {
	createNewList: async ({ request, locals, cookies }) => {
		const formData = await request.formData();
		const title = String(formData.get('title'));
		const email = locals.user.username;

		if (!title) {
			return fail(400, { title, missing: true });
		}

		// API CALL
		let temp = [];
		temp.push(encodeURIComponent("email") + "=" + encodeURIComponent(email));
		temp.push(encodeURIComponent("list_name") + "=" + encodeURIComponent(title));
		temp.push(encodeURIComponent("token")+"="+encodeURIComponent(cookies.get(TOKEN)));
		let formBody = temp.join("&");

		const response = await fetch(`${PUBLIC_API_URL}/api/v1/list/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody// JSON.stringify({ email: email, list_name: title })
		});

		if (response.headers.get('content-type')?.includes('application/json')) {
			return { success: true };
		} else {
			return fail(response.status, { text: response.statusText });
		}
	},

	deleteList: async ({ request, locals }) => {
		const formData = await request.formData();
		const list_id = Number(formData.get('list_id'));
		const email = locals.user.username;

		// API CALL
		const response = await fetch(`${PUBLIC_API_URL}/api/v1/list/${list_id}`, {
			method: 'DELETE',
			body: JSON.stringify({ email: email })
		});

		if (response.headers.get('content-type')?.includes('application/json')) {
			return { success: true };
		} else {
			return fail(response.status, { text: response.statusText });
		}
	}
};
