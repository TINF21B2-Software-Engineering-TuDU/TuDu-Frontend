<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;

    export let data: PageData;

    const { list_id } = data;
</script>

<h1>Create new task for list {list_id}</h1>

<form action="/main/lists/new" method="POST">
	<div>
		<label for="title">Title:</label>
		<input type="text" id="title" name="title" required />
	</div>

	{#if form?.invalid}
		<p class="error">Something went wrong. X_X</p>
	{/if}

	<button type="submit">Create</button>
</form>

<div class="actions">
	<a class="btn" href="/main/lists">Back</a>
</div>

<style>
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
