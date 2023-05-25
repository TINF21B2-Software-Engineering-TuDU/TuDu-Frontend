import type { PageLoad } from '../../../../../$types';
import { page } from '$app/stores';
import { PUBLIC_API_URL } from '$env/static/public';
import { fail, redirect } from '@sveltejs/kit';
import { TOKEN } from '$env/static/private';

export const load = (async ({ fetch, params }) => {
	const taskResponse = await fetch(`${PUBLIC_API_URL}/api/v1/list/${params.list}/task/${params.task_id}`);

	if (taskResponse.status >= 400 || !taskResponse.ok) {
		return { task: test };
	}
	const taskData = await taskResponse.json();
	const task = taskData.task;

	return { task: task, list_id: params.list };
}) satisfies PageLoad;

export const actions = {
	updateTask: async ({ request, locals, cookies, params }) => {
		const formData = await request.formData();

		const title = String(formData.get('title'));
		const dueDate = String(formData.get('dueDate'));
		const contents = String(formData.get('contents'));
		const reocurringRule = String(formData.get('ruleset'));
		const listId = params.list;
		const taskId = params.task_id

		if (!title) {
			return fail(400, { title, missing: true });
		}

		// API CALL
		let temp = [];
		temp.push(encodeURIComponent('title') + '=' + encodeURIComponent(title));
		if (dueDate !== '') {
			temp.push(encodeURIComponent('dueDate') + '=' + encodeURIComponent(dueDate));
		}
		temp.push(encodeURIComponent('contents') + '=' + encodeURIComponent(contents));
		temp.push(encodeURIComponent('reoccuring_rule') + '=' + encodeURIComponent(reocurringRule));
		temp.push(encodeURIComponent('token') + '=' + encodeURIComponent(cookies.get(TOKEN)));
		let formBody = temp.join('&');

		const response = await fetch(`${PUBLIC_API_URL}/api/v1/list/${listId}/task/${taskId}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody
		});

		if (response.ok) {
			throw redirect(302, `/main/lists/${listId}`);
		} else {
			return fail(response.status, { text: response.statusText });
		}
	}
}