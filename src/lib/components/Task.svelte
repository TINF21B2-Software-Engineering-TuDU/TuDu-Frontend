<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import type { Task } from '../../entities';
	import Button from './Button.svelte';
	import Checkbox from './Checkbox.svelte';
	import LinkButton from './LinkButton.svelte';

	export let task: Task;
	// export let inEditMode: Boolean = false;
	export let list_id: Number;

	let color: String;
	if (new Date(task.duedate) > new Date()) {
		color = 'green';
	} else if (new Date(task.duedate) == new Date()) {
		color = 'yellow';
	} else if (task.duedate === null) {
		color = 'lightgrey';
	} else {
		color = 'red';
	}

	let check = function () {
		dispatch('check');
	};

	let deleteTask = function () {
		dispatch('deleteTask');
	};

	// TODO: evtl. edit in der Component statt auf weitere route
	// let switchEditMode = function () {
	// 	console.log('SWICTH');
	// 	inEditMode = !inEditMode;
	// };
</script>

<div class="box">
	<h3>{task.title} #{task.task_id}</h3>
	<Checkbox checked={task.iscompleted} on:check={check} />

	<p>{task.contents}</p>

	{#if task.duedate === null}
		<p id="dueDate" style="--theme-color: {color}">Due anytime</p>
	{:else}
		<p id="dueDate" style="--theme-color: {color}">
			Due until {new Date(task.duedate).toLocaleDateString('de-DE')}<sub
				>Created on {new Date(task.creationdate).toLocaleDateString('de-DE')}</sub
			>
		</p>
	{/if}

	<LinkButton label="Edit Task" destination="/main/lists/{list_id}/task/{task.task_id}" />
	<Button
		label="Delete Task"
		type="delete"
		on:onclick={deleteTask}
		onclick={() => dispatch('deleteTask')}
	/>
</div>

<style>
	.box {
		border: 1px solid grey;
		border-radius: 5px;
		margin-bottom: 10px;
		padding: 10px;
	}

	#dueDate {
		color: var(--theme-color);
	}
</style>
