// See https://kit.svelte.dev/docs/types#app for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				username: string,
				isLoggedIn: boolean, 
				loginTime: Date
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
