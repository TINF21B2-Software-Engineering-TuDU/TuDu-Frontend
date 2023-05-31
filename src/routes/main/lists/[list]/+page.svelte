<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import DateInput from '$lib/components/DateInput.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import DropdownInput from '$lib/components/DropdownInput.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Task from '$lib/components/Task.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { ReocurringRuleTypes } from '$lib/entities';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { list, tasks } = data;

	let unfinishedTasks = tasks.filter((task) => !task.iscompleted);
	let finishedTasks = tasks.filter((task) => task.iscompleted);

	// Reocurring Rule Sets
	const rule_set = [
		ReocurringRuleTypes.Daily,
		ReocurringRuleTypes.Weekly,
		ReocurringRuleTypes.Biweekly,
		ReocurringRuleTypes.Monthly,
		ReocurringRuleTypes.Yearly
	];
	let selected_rule = -1;

	// Mark Task as complete
	let check = async function (task_id: Number) {
		let temp = [];

		temp.push(encodeURIComponent('taskId') + '=' + encodeURIComponent(task_id.toString()));
		let formBody = temp.join('&');
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
		}
		// better use invalidate("/") or invalidateAll(), but they are not working...
		location.reload();
	};

	// Delete Task
	let deleteTask = async function (task_id: Number) {
		let temp = [];

		temp.push(encodeURIComponent('taskId') + '=' + encodeURIComponent(task_id.toString()));
		let formBody = temp.join('&');
		const checkResponse = await fetch('?/deleteTask', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: temp
		});
		if (checkResponse.status >= 400 || !checkResponse.ok) {
			return null;
		}
		// better use invalidate("/") or invalidateAll(), but they are not working...
		location.reload();
	};
</script>

{#if list === undefined}
	<h1>Internal Server Error</h1>
{:else}
	<h2>TuDu's of list {list.list_name}:</h2>
	<p>{list.description}</p>

	<LinkButton label="Back" destination="/main" />
	<Divider />

	<div class="tasks">
		{#if tasks !== null && tasks.length > 0}
			<h3>Unfinished TuDu's:</h3>
			{#each unfinishedTasks as task, i}
				<Task
					bind:task
					list_id={list.list_id}
					on:check={() => check(task.task_id, i)}
					on:deleteTask={() => deleteTask(task.task_id)}
				/>
			{/each}
			<Divider />
			<h3>Finished TuDu's</h3>
			{#each finishedTasks as task, i}
				<Task
					bind:task
					list_id={list.list_id}
					on:check={() => check(task.task_id, i)}
					on:deleteTask={() => deleteTask(task.task_id)}
				/>
			{/each}
		{/if}
	</div>

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
{/if}

<style>
</style>
