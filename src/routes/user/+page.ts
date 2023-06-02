import type { PageLoad } from './$types';
import { page } from '$app/stores';

export const load = (async (event) => {
    return event.data;
}) satisfies PageLoad;
