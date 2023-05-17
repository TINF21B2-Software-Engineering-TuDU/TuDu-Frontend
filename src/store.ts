import { writable } from "svelte/store";
import type { Item, List } from "./entities";

// use this writable when working with a single item
export let current_item = writable({
    name: "STANDARD_ITEM",
    isEditable: false,
    dueDate: new Date,
    isCompleted: false,
    contents: null,
    creationDate: new Date
} as Item);

// use this writable when working with a single list
export let current_list = writable({
    id: 0,
    items: null,
    name: "STANDARD_LIST"
} as List);