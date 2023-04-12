import { writable } from "svelte/store";
import type { item, User } from "./entities";

// eslint-disable-next-line prefer-const
export let user = writable({
    isLoggedIn: true,
    loginTime: new Date,
    name: null,
    passwordHash: "1234"
} as User); 

// eslint-disable-next-line prefer-const
export let list_item = writable({
    name: "STANDARD_ITEM",
    isEditable: false,
    due_date: new Date,
    isFinished: false,
    contents: null,
    creationDate: new Date
} as item);