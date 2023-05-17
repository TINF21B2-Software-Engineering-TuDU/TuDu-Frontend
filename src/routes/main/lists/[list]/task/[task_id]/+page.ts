import type { PageLoad } from './$types';
import { page } from '$app/stores';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async ({ fetch, params }) => {
	const taskResponse = await fetch(`${PUBLIC_API_URL}/api/v1/tasks/${params.task_id}`);
	console.log(taskResponse);
	if (taskResponse.status >= 400) {
		const test = {id: 1, creationDate: new Date, dueDate: new Date, list: 1, isCompleted: false, isEditable: true, name: "Do something"};
		return { task: test };
	}
	const taskData = await taskResponse.json();
	const task = taskData.lists;

	return { task: task };
}) satisfies PageLoad;