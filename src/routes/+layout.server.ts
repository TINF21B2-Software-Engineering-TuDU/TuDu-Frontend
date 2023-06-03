import { PUBLIC_API_URL } from '$env/static/public';
import type { LayoutServerData } from './$types'

export const load: LayoutServerData = async ({ fetch, locals }) => {
    if (!locals.user.isLoggedIn) {
        return {
            user: locals.user
        }
    } else {
        const listsResponse = await fetch(`${PUBLIC_API_URL}/api/v1/list/`);
        if (listsResponse.status >= 400 || !listsResponse.ok) {
            return { lists: null };
        }
        const listsData = await listsResponse.json();
        const lists = listsData.lists;
    
        return { lists: lists, user: locals.user };
    }
}