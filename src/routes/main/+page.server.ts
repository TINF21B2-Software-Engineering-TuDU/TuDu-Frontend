import { redirect } from '@sveltejs/kit';
import { user } from '../../store';

let loginState = false;
const localUser = user.subscribe((user) => loginState = user.isLoggedIn);

export const load = async () => {
	if (!loginState) {
		console.log(user);
		throw redirect(302, '/login');
	}
};
