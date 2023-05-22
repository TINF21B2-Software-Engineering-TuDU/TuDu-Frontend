import { writable } from "svelte/store";
import type { Task, List } from "./entities";

// use this writable when working with a single item
export let current_item = writable({
    title: "STANDARD_ITEM",
    isEditable: false,
    dueDate: new Date,
    isCompleted: false,
    contents: null,
    creationdate: new Date
} as Task);

// use this writable when working with a single list
export let current_list = writable({
    id: 0,
    items: null,
    name: "STANDARD_LIST"
} as List);