import type { PageLoad } from './$types';
import { page } from '$app/stores';

export const load = (async ({ fetch, params }) => {
	const listResponse = await fetch(`http://localhost:8080/api/v1/list/${params.list}`);
	console.log(listResponse);
	if (listResponse.status >= 400) {
		let test = { id: 1, title: 'None', description: 'None', tasks: [{id: 1}, {id: 2}, {id: 3}] };
		return { list: test };
	}
	const listData = await listResponse.json();
	const list = listData.lists;

	return { list: list };
}) satisfies PageLoad;