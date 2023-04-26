import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	return { list_id: params.list };
}) satisfies PageLoad;