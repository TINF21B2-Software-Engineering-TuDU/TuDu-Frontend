import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// the logout is only used to inform the DB and does not need to be displayed to the user
	// hence, the user is immediately redirected to the landing page
	throw redirect(302, '/main');
};