// import { redirect } from "@sveltejs/kit";
// import { user } from "../store";

// let subscriberUser;
// const localUser = user.subscribe((user) => subscriberUser = user);

// export function logout() {
//     console.log('LOGOUT');
//     subscriberUser = {
//         isLoggedIn: false,
//         email: null,
//         name: null,
//         loginTime: new Date('08.04.2023'),
//         passwordHash: ''
//     };

//     throw redirect(302, "/");
//     // show_login_form = !show_login_form;

//     // TODO: delete cookies and jwt and all the other local user stuff
// }