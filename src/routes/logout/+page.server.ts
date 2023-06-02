import {fail, redirect} from '@sveltejs/kit';
import type {Actions, PageServerLoad} from './$types';
import {PUBLIC_API_URL} from "$env/static/public";
import { TOKEN, TOKEN_BEARER } from '$env/static/private';

export const load: PageServerLoad = async () => {
    // logout is only serverside and deletes cookies and informs API
    // user does not need to see this page
    throw redirect(302, '/');
};

export const actions: Actions = {
	async default({ cookies, locals, fetch }) {
        // inform API about logout
        const response = await fetch(`${PUBLIC_API_URL}/auth/v1/logout`);
        if (response.status >= 400 || !response.ok) {
            // display error message in separate page
            return fail(500);
        }
        
        // reset user data
        locals.user = {
            username: "User",
            isLoggedIn: false,
            loginTime: new Date(),
        };

        // eat the cookie
        await cookies.delete(TOKEN_BEARER);
        await cookies.delete(TOKEN);

        throw redirect(302, '/');
	},
};
