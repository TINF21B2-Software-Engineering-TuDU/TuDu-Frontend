import { redirect } from '@sveltejs/kit';
import { user } from '../../store';

export const load = async () => {
	if (!user.isLoggedIn) {
		console.log(user);
		throw redirect(302, '/login');
	}
};
