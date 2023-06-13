<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import DateInput from '$lib/components/DateInput.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import DropdownInput from '$lib/components/DropdownInput.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Task from '$lib/components/Task.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { ReocurringRuleTypes } from '$lib/entities';
	import type { List } from '../../../../entities';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	export let list: List;
	export let tasks: Task;

	$: list = data.list;
	$: tasks = data.tasks;

	$: unfinishedTasks = tasks.filter((task: Task) => !task.iscompleted).sort((a: Task, b: Task) => new Date(a.duedate) - new Date(b.duedate));
	$: finishedTasks = tasks.filter((task: Task) => task.iscompleted).sort((a: Task, b: Task) => new Date(a.duedate) - new Date(b.duedate));

	// Reocurring Rule Sets
	const rule_set = [
		ReocurringRuleTypes.Daily,
		ReocurringRuleTypes.Weekly,
		ReocurringRuleTypes.Biweekly,
		ReocurringRuleTypes.Monthly,
		ReocurringRuleTypes.Yearly
	];
	let selected_rule = -1;

	let checkTask = async function (task: Task, index) {
		let temp = [];
		temp.push(encodeURIComponent('taskId') + '=' + encodeURIComponent(task.task_id.toString()));

		const checkResponse = await fetch('?/checkTask', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: temp
		});

		if (checkResponse.status >= 400 || !checkResponse.ok) {
			return null;
		} else {
			task.iscompleted = !task.iscompleted;
			if (task.iscompleted) {
				finishedTasks = [...finishedTasks, unfinishedTasks.pop(index)];
			} else {
				unfinishedTasks = [...unfinishedTasks, finishedTasks.pop(index)];
			}
		}
	};

	let deleteTask = async function (task: Task, index) {
		let temp = [];
		temp.push(encodeURIComponent('taskId') + '=' + encodeURIComponent(task.task_id.toString()));

		const deleteResponse = await fetch('?/deleteTask', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: temp
		});

		if (deleteResponse.status >= 400 || !deleteResponse.ok) {
			return null;
		} else {
			if (task.iscompleted) {
				finishedTasks = [
					...finishedTasks.slice(0, index),
					...finishedTasks.slice(index + 1, finishedTasks.length)
				];
			} else {
				unfinishedTasks = [
					...unfinishedTasks.slice(0, index),
					...unfinishedTasks.slice(index + 1, unfinishedTasks.length)
				];
			}
		}
	};

	// Delete List	
	let deleteList = async function (list_id: Number) {
		let temp = [];
		temp.push(encodeURIComponent('list_id') + '=' + encodeURIComponent(list_id.toString()));

		const deleteResponse = await fetch('?/deleteList', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: temp
		});
		if (deleteResponse.status >= 400 || !deleteResponse.ok) {
			return null;
		}
		location.reload();
	};
</script>

{#if list === undefined}
	<h1>Internal Server Error</h1>
{:else}
	<h2>TuDu's of list {list.list_name}:</h2>
	<p>{list.description}</p>

	<LinkButton label="Back" destination="/main" />

	<div class="tasks">
		{#if tasks !== null && tasks.length > 0}
			{#if unfinishedTasks !== null && unfinishedTasks.length > 0}
				<Divider />
				<h3>Unfinished TuDu's ({unfinishedTasks.length}):</h3>
				{#each unfinishedTasks as task, i}
					<Task
						bind:task
						list_id={list.list_id}
						on:check={() => checkTask(task, i)}
						on:deleteTask={() => deleteTask(task, i)}
					/>
				{/each}
			{/if}
			{#if finishedTasks !== null && finishedTasks.length > 0}
				<Divider />
				<h3>Finished TuDu's ({finishedTasks.length})</h3>
				{#each finishedTasks as task, i}
					<Task
						bind:task
						list_id={list.list_id}
						on:check={() => checkTask(task, i)}
						on:deleteTask={() => deleteTask(task, i)}
					/>
				{/each}
			{/if}
		{/if}
	</div>

	<Divider />
	<h3>Create new Task</h3>

	<form method="POST" action="?/createNewTask">
		<div>
			<label for="title">Title:</label>
			<TextInput
				placeholder="Task Title"
				type="text"
				id="title"
				name="title"
				required={true}
				value={form?.title ?? ''}
			/>
		</div>

		<div>
			<label for="contents">Description:</label>
			<TextArea placeholder="Description" id="contents" name="contents" />
		</div>

		<div>
			<label for="reocurring_rule">Reocurring Rule:</label>
			<input type="hidden" value={rule_set[selected_rule]} id="ruleset" name="ruleset" />
			<DropdownInput
				placeholder="Reocurring Rule"
				options={rule_set}
				bind:selected={selected_rule}
			/>
		</div>

		<div>
			<label for="dueDate">Due Date:</label>
			<DateInput id="dueDate" name="dueDate" />
		</div>

		{#if form?.missing}
			<p class="error">This field is required</p>
		{/if}

		{#if form?.success}
			<p>Task Added!</p>
		{:else if form?.text}
			<p>{form?.text}</p>
		{/if}

		<Button label="Create Task" button_type="submit" type="confirm" onclick={() => null} />
	</form>

	<Button label="Delete List" type="delete" onclick={() => deleteList(list.list_id)} />
{/if}

<style>
</style>
