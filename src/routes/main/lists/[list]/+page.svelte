<script lang="ts">
	import { page } from '$app/stores';
	import Task from '$lib/components/Task.svelte';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { list, tasks } = data;
</script>

{#if list === undefined}
	<h1>Internal Server Error</h1>
{:else}
	<h1>{list.list_name} #{list.list_id}</h1>
	<!-- <p>{list.description}</p> -->
	<a class="button" href="/main">Back</a>

	<div class="tasks">
		{#if tasks === null || tasks.length === 0}
			<h2>There are now tasks in this list!</h2>
		{:else}
			<h2>TuDu's:</h2>
			{#each tasks as task}
				<Task task={task} />
			{/each}
		{/if}
	</div>

	<hr />

	<h2>Create new Task</h2>

	<form method="POST" action="?/createNewTask">
		<div>
			<label for="title">Title:</label>
			<input type="text" id="title" name="title" required value={form?.title ?? ''} />
		</div>

		<div>
			<label for="contents">Description:</label>
			<input type="text" id="contents" name="contents" value={form?.title ?? ''} />
		</div>

		<div>
			<label for="dueDate">Due Date:</label>
			<input type="date" id="dueDate" name="dueDate" value="{new Date}" />
		</div>

		{#if form?.missing}
			<p class="error">This field is required</p>
		{/if}
	
		<button type="submit">Create Task</button>
	</form>
	
	{#if form?.success}
		<p>Added Taskk! 🥳</p>
	{:else if form?.text}
		<p>{form?.text}</p>
	{/if}
{/if}

<style>
	.task {
		border: 1px solid gray;
		border-radius: 5px;
		background-color: #213547;
		margin: 5px;
		padding-left: 10px;
	}
</style>
