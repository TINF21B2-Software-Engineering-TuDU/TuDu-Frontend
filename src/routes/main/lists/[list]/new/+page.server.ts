import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async () => {
	// nothin needs to happen here
}

// TODO: change to create new task endpoint
const postNewList = async (title: string, email: string) => {
	const response = await fetch(`${PUBLIC_API_URL}/api/v1/list`, {
		method: 'POST',
		body: JSON.stringify({ email: email, title: title })
	});
	if (response.headers.get('content-type')?.includes('application/json')) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

const createList: Action = async ({ request, locals }) => {
	const data = await request.formData();
	const title = data.get('title');
	const descrption = data.get('description');

	// check input
	if (typeof title !== 'string' || typeof descrption !== 'string' || !title || !descrption) {
		return fail(400, { invalid: true });
	}

	// POST request
	const response = await postNewList(title, locals.user.username);
	console.log(response);
	
	// error-handling
	// if user already exists
	// other error
	if (response.response.status >= 400 || !response.response.ok) {
		return fail(400, { invalid: true });
	}

	throw redirect(302, '/main/lists/');
};

export const actions: Actions = { createList };
