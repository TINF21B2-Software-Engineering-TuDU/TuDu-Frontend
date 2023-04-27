import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user.isLoggedIn) {
		console.log(locals.user);
		throw redirect(302, '/login');
	}
};
