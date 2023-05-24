<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;
	export let form: ActionData;

	const { lists } = data;
</script>

<h1>Your Lists</h1>
{#if lists != null}
	{#each lists as list}
		<a href="/main/lists/{list.list_id}">
			<div class="list">
				<h2>{list.list_name} #{list.list_id}</h2>
				<p>Description: {list.description}</p>
			</div>
		</a>
	{/each}
{:else}
	<p>You have no lists!</p>
{/if}

<hr />

<h1>Create new List</h1>

<form method="POST" action="?/createNewList">
	<div>
		<label for="title">Title:</label>
		<input type="text" id="title" name="title" required value={form?.title ?? ''} />
	</div>

	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}

	<button type="submit">Create List</button>
</form>

{#if form?.success}
	<p>Added List! 🥳</p>
{:else}
	<p>{form?.text}</p>
{/if}

<style>
	.list {
		border: 1px solid gray;
		border-radius: 5px;
		background-color: #213547;
		margin: 5px;
		padding-left: 10px;
	}

	form {
		width: 100%;
	}
	input {
		color: #b1b1b1;
		width: auto;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		font-size: 24px;
		align-items: left;
	}
	input[type='text'] {
		width: 100%;
	}
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
	.hint-space {
		font-size: 20px;
		color: red;
		align-items: left;
	}
	.btn {
		border: 1px solid gray;
	}
	.error {
		color: red;
	}
</style>
