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
</script>

<div class="box">
	<table>
		<tr>
			<td><Checkbox checked={task.iscompleted} on:check={check} /></td>
			<td><h3>{task.title}</h3></td>
		</tr>
	</table>

	{#if task.contents}
		<u>Description:</u>
		<p>{task.contents}</p>
	{/if}

	{#if task.duedate === null}
		<p id="dueDate" style="--theme-color: {color}">Due anytime</p>
	{:else}
		<p id="dueDate" style="--theme-color: {color}">
			Due until: {new Date(task.duedate).toLocaleDateString('de-DE')}
		</p>
		{#if !(task.reoccuring_rule === 'undefined')}
			<p>Reocurring Rule: {task.reoccuring_rule}</p>
		{/if}
	{/if}

	<p>Created on: {new Date(task.creationdate).toLocaleDateString('de-DE')}</p>

	<div class="flex-parent">
		<div class="flex-child">
			<LinkButton label="Edit Task" destination="/main/lists/{list_id}/task/{task.task_id}" />
		</div>
		<div class="flex-child">
			<Button
				label="Delete Task"
				type="delete"
				on:onclick={deleteTask}
				onclick={() => dispatch('deleteTask')}
			/>
		</div>
	</div>
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

	.flex-parent {
		display: flex;
	}

	.flex-child {
		flex: 1;
	}

	.flex-child:first-child {
		margin-right: 5px;
	}
</style>
