<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import ListTab from '$lib/components/ListTab.svelte';
	import TextArea from '$lib/components/TextArea.svelte';

	export let data: PageData;
	export let form: ActionData;

	const { lists } = data;
</script>

<h2>Your Lists</h2>
{#if lists != null}
	{#each lists as list}
		<a href="/main/lists/{list.list_id}">
			<div class="list">
				<ListTab label="{list.list_name}" onclick={() => null}/>
				<ListTab label="Description: {list.description ? list.description : 'Not provided!'}" color="grey" onclick={() => null} />
			</div>
		</a>
		<Divider />
	{/each}
{:else}
	<p>You have no lists!</p>
{/if}

<h3 id="create-new-list">Create new List</h3>

<form method="POST" action="?/createNewList">
	<div>
		<label for="title">New List Title:</label>
		<TextInput placeholder="List Title" type="text" id="title" name="title" required={true} />
	</div>
	
	<div>
		<label for="description">Description:</label>
		<TextArea placeholder="Description" id="description" name="description" />
	</div>

	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}

	{#if form?.success}
		<p>Added List! 🥳</p>
	{:else}
		<p>{form?.text}</p>
	{/if}

	<Button label="Create List" button_type="submit" onclick={() => null} />
</form>

<style>
	.list {
		margin: 5px;
		padding-left: 10px;
	}

	form {
		width: 100%;
	}

	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>
