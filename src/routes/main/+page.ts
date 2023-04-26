import type { PageLoad } from './$types';

import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async ({ fetch, params }) => {
	const listsResponse = await fetch(PUBLIC_API_URL+'/api/v1/list/');
	if (listsResponse.status >= 400 || !listsResponse.ok) {
		return { lists: null };
	}
	const listsData = await listsResponse.json();
	const lists = listsData.lists;

	return { lists: lists };
}) satisfies PageLoad;
