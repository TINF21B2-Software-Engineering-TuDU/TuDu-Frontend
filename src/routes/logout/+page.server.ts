import {fail, redirect} from '@sveltejs/kit';
import type {Actions, PageServerLoad} from './$types';
import {PUBLIC_API_URL} from "$env/static/public";

export const load: PageServerLoad = async () => {
    // logout is only serverside and deletes cookies and informs API
    // user does not need to see this page
    throw redirect(302, '/');
};

const getLogout = async (auth_token?: string) => {
    const response = await fetch(PUBLIC_API_URL + '/api/v1/logout', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({token: auth_token})
    });
    return response;
}

export const actions: Actions = {
    async default({cookies, locals}) {
        console.log("User Logout")
        const auth_token = JSON.stringify({token: cookies.get('AuthorizationToken')})

        const logout = await getLogout(auth_token);
        if (logout.status >= 400) {
            // display error message in separate page
            return redirect(302, '/main')
        }

        // reset user data
        locals.user = {
            username: "User",
            isLoggedIn: false,
            loginTime: new Date(),
        };

        console.log(locals.user)

        // eat the cookie
        await cookies.delete('AuthorizationToken');

        throw redirect(302, '/login');
    }
};
