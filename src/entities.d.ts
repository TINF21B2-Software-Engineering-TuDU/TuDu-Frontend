export interface User { 
	username?: string | null, 
	email?: string | null,
	loginTime: Date, 
	isLoggedIn: boolean
}

export interface Item {
	readonly id: int,
	list_id: int,
	title: string,
	isEditable: boolean,
	dueDate: Date,
	isCompleted: boolean,
	contents?: string | null,
	readonly creationDate: Date,
}

export interface List {
	readonly id: int,
	name: string,
	description: string,
	items: [Item] | null
}