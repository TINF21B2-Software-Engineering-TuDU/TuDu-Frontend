import type { PageLoad } from './$types';
import { page } from '$app/stores';

export const load = (async ({ fetch, params }) => {
	const taskResponse = await fetch(`http://localhost:8080/api/v1/tasks/${params.task_id}`);
	console.log(taskResponse);
	if (taskResponse.status >= 400) {
		let test = { id: 1, title: 'None', description: 'None', list: 1 };
		return { task: test };
	}
	const taskData = await taskResponse.json();
	const task = taskData.lists;

	return { task: task };
}) satisfies PageLoad;