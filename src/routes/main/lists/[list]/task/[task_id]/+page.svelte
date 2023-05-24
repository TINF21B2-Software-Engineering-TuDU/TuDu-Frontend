<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import DateInput from '$lib/components/DateInput.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { task, list_id } = data;
</script>

<h1>Edit {task.title}</h1>

<form method="POST" action="?/updateTask">
	<label for="title">Title:</label>
	<TextInput
		placeholder="Task Title"
		type="text"
		id="title"
		name="title"
		required={true}
		value={form?.title ?? task.title}
	/>

	<label for="contents">Description:</label>
	<TextArea placeholder="Description" id="contents" name="contents" value="{task.contents}"/>

	<label for="dueDate">Due Date:</label>
	<DateInput id="dueDate" name="dueDate" />

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

<Divider />

<a href="/main/lists/{list_id}">Back to List</a>