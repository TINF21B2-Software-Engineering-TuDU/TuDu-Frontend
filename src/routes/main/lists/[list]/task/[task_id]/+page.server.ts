import type { PageLoad } from '../../../../../$types';
import { page } from '$app/stores';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async ({ fetch, params }) => {
	const taskResponse = await fetch(`${PUBLIC_API_URL}/api/v1/list/${params.list}/task/${params.task_id}`)

	if (taskResponse.status >= 400 || !taskResponse.ok) {
		return { task: test };
	}
	const taskData = await taskResponse.json();
	const task = taskData.task;

	return { task: task, list_id: params.list };
}) satisfies PageLoad;

export const actions = {
	updateTask:async ({ request, locals, cookies, params }) => {
		// here code for task update
	}
}