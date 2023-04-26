import { writable } from "svelte/store";
import type { item } from "./entities";

// eslint-disable-next-line prefer-const
export let list_item = writable({
    name: "STANDARD_ITEM",
    isEditable: false,
    due_date: new Date,
    isFinished: false,
    contents: null,
    creationDate: new Date
} as item);