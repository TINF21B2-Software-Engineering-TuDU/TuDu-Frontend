export interface User { 
	username?: string | null, 
	email?: string | null,
	loginTime: Date, 
	isLoggedIn: boolean
}

export interface item {
	readonly id: int,
	group: list_group,
	name: string,
	isEditable: boolean,
	due_date: Date,
	isFinished: boolean,
	contents?: string | null,
	readonly creationDate: Date,
}

export interface list_group {
	readonly id: int,
	name: string,
	items: [item]
}