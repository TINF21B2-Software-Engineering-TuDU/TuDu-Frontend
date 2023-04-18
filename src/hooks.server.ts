import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { headers } = event.request;

	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	} 

	

	return await resolve(event);
};
