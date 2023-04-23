import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from '../$types';

// TODO: change to create new task endpoint
const postNewList = async (title: string, descrption: string) => {
	const response = await fetch('http://localhost:8080/api/v1/list', {
		method: 'POST',
		body: JSON.stringify({ title: title, descrption: descrption })
	});
	if (response.headers.get('content-type')?.includes('application/json')) {
		const json = await response.json();
		return { response, json };
	} else {
		return { response };
	}
};

const createList: Action = async ({ request }) => {
	const data = await request.formData();
	const title = data.get('title');
	const descrption = data.get('description');

	if (typeof title !== 'string' || typeof descrption !== 'string' || !title || !descrption) {
		return fail(400, { invalid: true });
	}

	// hier user aus DB anfordern
	const jsonData = await postNewList(title, descrption);

	// error-handling
	// if user already exists
	// other error
	if (jsonData.response.status >= 400) {
		return fail(400, { invalid: true });
	}

	throw redirect(302, '/main/lists/');
};

export const actions: Actions = { createList };
