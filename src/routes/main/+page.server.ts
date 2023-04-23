import { redirect } from '@sveltejs/kit';
import { user } from '../../store';

export const load = async ({ locals }) => {
	if (!locals.user.isLoggedIn) {
		console.log(locals.user);
		throw redirect(302, '/login');
	}
};
