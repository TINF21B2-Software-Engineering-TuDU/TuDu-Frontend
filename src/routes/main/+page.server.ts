import { redirect } from '@sveltejs/kit';
import { user } from '../../store';

export const load = async () => {
	if (!user.isLoggedIn) {
		throw redirect(302, '/login');
	}
};
