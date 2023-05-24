<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import DateInput from '$lib/components/DateInput.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Task from '$lib/components/Task.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { list, tasks } = data;

	// TODO: das abchecken geht noch nicht, weil der API call fehl schlägt
	// irgendwie muss es als FORM gesendet werden, damit der Endpoint in der +page.server.ts erreicht werden kann
	// ansich sollte so schon funktionieren...
	let check = async function () {
		await fetch("?/checkTask", {method: "POST", body: null});
	}
</script>

{#if list === undefined}
	<h1>Internal Server Error</h1>
{:else}
	<h1>List: {list.list_name}</h1>

	<a class="button" href="/main">Back</a>

	<div class="tasks">
		{#if tasks === null || tasks.length === 0}
			<h2>There are now tasks in this list!</h2>
		{:else}
			<h2>TuDu's:</h2>
			{#each tasks as task}
				<Task task={task} list_id={list.list_id} on:check={check} />
				<Divider />
			{/each}
		{/if}
	</div>

	<h2>Create new Task</h2>

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

		<Button label="Create Task" button_type="submit" onclick={() => null} />
	</form>
{/if}

<style>
</style>
