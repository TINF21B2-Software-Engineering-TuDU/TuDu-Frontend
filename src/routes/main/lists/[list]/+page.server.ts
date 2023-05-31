import { PUBLIC_API_URL } from '$env/static/public';
import type { List, Task } from '../../../../entities';
import type { PageLoad } from '../../../$types';
import { fail } from '@sveltejs/kit';
import { TOKEN, TOKEN_BEARER } from '$env/static/private';
import { invalidateAll } from '$app/navigation';

export const load = (async ({ fetch, params }) => {
	const listResponse = await fetch(`${PUBLIC_API_URL}/api/v1/list/${params.list}`);
	const tasksResponse = await fetch(`${PUBLIC_API_URL}/api/v1/list/${params.list}/tasks`);

	if (
		listResponse.status >= 400 ||
		!listResponse.ok ||
		tasksResponse.status >= 400 ||
		!tasksResponse.ok
	) {
		return { list: null, tasks: null };
	}
	const listData = await listResponse.json();
	const tasksData = await tasksResponse.json();
	const list = listData.list;
	const tasks = tasksData.tasks;

	return { list: list, tasks: tasks };
}) satisfies PageLoad;

export const actions = {
	deleteTask: async ({request, locals, cookies, params }) => {
		const listId = params.list;

		const formData = await request.formData();
		const taskId = String(formData.get("taskId"))

		// API CALL
		let temp = [];
		
		temp.push(encodeURIComponent('token') + '=' + encodeURIComponent(cookies.get(TOKEN)));
		let formBody = temp.join('&');

		const response = await fetch(`${PUBLIC_API_URL}/api/v1/list/${listId}/task/${taskId}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody
		});

		if (response.ok) {
			return { success: true };
		} else {
			return fail(response.status, { text: response.statusText });
		}
	},
	createNewTask: async ({ request, locals, cookies, params }) => {
		const formData = await request.formData();

		const title = String(formData.get('title'));
		const dueDate = String(formData.get('dueDate'));
		const contents = String(formData.get('contents'));
		const reocurringRule = String(formData.get('ruleset'));
		const isEditable = true;
		const isCompleted = false;
		const listId = params.list;

		if (!title) {
			return fail(400, { title, missing: true });
		}

		// API CALL
		let temp = [];
		temp.push(encodeURIComponent('title') + '=' + encodeURIComponent(title));
		temp.push(encodeURIComponent('isEditable') + '=' + encodeURIComponent(isEditable));
		temp.push(encodeURIComponent('isCompleted') + '=' + encodeURIComponent(isCompleted));
		if (dueDate !== '') {
			temp.push(encodeURIComponent('dueDate') + '=' + encodeURIComponent(dueDate));
		}
		temp.push(encodeURIComponent('contents') + '=' + encodeURIComponent(contents));
		temp.push(encodeURIComponent('reoccuring_rule') + '=' + encodeURIComponent(reocurringRule));
		temp.push(encodeURIComponent('list_id') + '=' + encodeURIComponent(listId));
		temp.push(encodeURIComponent('token') + '=' + encodeURIComponent(cookies.get(TOKEN)));
		let formBody = temp.join('&');

		const response = await fetch(`${PUBLIC_API_URL}/api/v1/tasks/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody
		});

		if (response.ok) {
			return { success: true };
		} else {
			return fail(response.status, { text: response.statusText });
		}
	},
	checkTask: async ({ request, cookies, params }) => {
		const listId = params.list;

		const formData = await request.formData();
		const taskId = String(formData.get("taskId"))

		// API CALL
		let temp = [];
		
		temp.push(encodeURIComponent('token') + '=' + encodeURIComponent(cookies.get(TOKEN)));
		let formBody = temp.join('&');

		const response = await fetch(`${PUBLIC_API_URL}/api/v1/list/${listId}/task/${taskId}/check`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formBody
		});

		if (response.ok) {
			return { success: true };
		} else {
			return fail(response.status, { text: response.statusText });
		}
	}
};
