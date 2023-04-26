import type { PageLoad } from './$types';
import { page } from '$app/stores';

export const load = (async (event) => {
	// const listsResponse = await fetch('http://localhost:8080/api/v1/list/');
	// console.log(listsResponse);
	// if (listsResponse.status >= 400) {
	// 	let test = [
	// 		{ id: 1, title: 'None', description: 'None' },
	// 		{ id: 2, title: 'None', description: 'None' }
	// 	];
	// 	return { lists: test };
	// }
	// const listsData = await listsResponse.json();
	// const lists = listsData.lists;

	// return { lists: lists };
    return event.data;
}) satisfies PageLoad;
