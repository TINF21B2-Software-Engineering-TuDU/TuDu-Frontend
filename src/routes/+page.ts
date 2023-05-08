import type { PageLoad } from './$types';

export const load = (async (event) => {
    return event.data;
}) satisfies PageLoad;

/*
export function logout() {
    console.log('LOGOUT');
    subscriberUser = {
        isLoggedIn: false,
        email: null,
        name: null,
        loginTime: new Date('08.04.2023'),
        passwordHash: ''
    };

    throw redirect(302, "/");
    // show_login_form = !show_login_form;

    // TODO: delete cookies and jwt and all the other local user stuff
}*/
