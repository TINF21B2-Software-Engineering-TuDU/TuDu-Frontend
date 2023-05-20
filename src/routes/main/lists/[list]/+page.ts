import type { PageLoad } from './$types';
import { page } from '$app/stores';
import { PUBLIC_API_URL } from '$env/static/public';
import type { List } from '../../../../entities';

export const load = (async ({ fetch, params }) => {
	const listResponse = await fetch(`${PUBLIC_API_URL}/api/v1/list/${params.list}`);
	if (listResponse.status >= 400 || !listResponse.ok) {
		const test: List = { id: 1, name: 'Some List', description: "Standard list for display purpose only", items: [{id: 1, creationDate: new Date, dueDate: new Date, list_id: 1, isCompleted: false, isEditable: true, title: "Do something"}] };
		return { list: test };
	}
	const listData = await listResponse.json();
	const list = listData.lists;

	return { list: list };
}) satisfies PageLoad;