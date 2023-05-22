export interface User { 
	username?: string | null, 
	email?: string | null,
	loginTime: Date, 
	isLoggedIn: boolean
}

export interface Task {
	readonly user_id: int,
	readonly list_id: int,
	readonly task_id: int,
	title: string,
	iseditable: boolean,
	iscompleted: boolean,
	duedate: Date,
	contents?: string | null,
	readonly creationdate: Date,
}

export interface List {
	readonly list_id: int,
	readonly user_id: int,
	list_name: string,
	description: string
}