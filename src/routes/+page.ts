import type { PageLoad } from './$types';

export const load = (async (event) => {
    return event.data;
}) satisfies PageLoad;
