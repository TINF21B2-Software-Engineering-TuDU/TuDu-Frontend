<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import DateInput from '$lib/components/DateInput.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import DropdownInput from '$lib/components/DropdownInput.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { ActionData, PageData } from './$types';
	import { ReocurringRuleTypes } from '$lib/entities';
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let data: PageData;
	export let form: ActionData;

	const { task, list_id } = data;

	// Reocurring Rule Sets
	const rule_set = [
		ReocurringRuleTypes.Daily,
		ReocurringRuleTypes.Weekly,
		ReocurringRuleTypes.Biweekly,
		ReocurringRuleTypes.Monthly,
		ReocurringRuleTypes.Yearly
	];
	let selected_rule = -1;
	if (task.reoccuring_rule !== null && task.reoccuring_rule !== undefined) {
		const indexFunc = (element) => element == task.reoccuring_rule;
		selected_rule = rule_set.findIndex(indexFunc);
	}
</script>

<h1>Edit {task.title}</h1>

<LinkButton label="Back to List" destination="/main/lists/{list_id}" />

<Divider />

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
	<TextArea placeholder="Description" id="contents" name="contents" value={task.contents} />

	<div>
		<label for="reocurring_rule">Reocurring Rule:</label>
		<input type="hidden" value={rule_set[selected_rule]} id="ruleset" name="ruleset" />
		<DropdownInput placeholder="Reocurring Rule" options={rule_set} bind:selected={selected_rule} />
	</div>

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

	<Button label="Edit Task" button_type="submit" type="confirm" onclick={() => null} />
</form>
