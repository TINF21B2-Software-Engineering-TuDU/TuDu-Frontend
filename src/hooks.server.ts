import type { Handle } from '@sveltejs/kit'
import { user } from './store';

export const handle: Handle = async ({event, resolve}) => {
    // get cookie
    const session = event.cookies.get('session');

    // if no cookie is set, load page normal
    if(!session) {
        return await resolve(event);
    }

    // get user from DB
    const user = await fetch('localhost:8080/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: })
    })

    // TEST

    if (user) {
        event.locals.user = {
            name: user.username,
            role: user.role.name
        }
    }

    return await resolve(event)
}