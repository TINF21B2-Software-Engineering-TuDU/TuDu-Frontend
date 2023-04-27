<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;

	let useremail: string;
	let password: string;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>
<p>Please input your credentials</p>

<form action="?/login" method="post">
	<div>
		<label for="username">Name:</label>
		<input type="text" id="username" name="username" required />
	</div>

	<div>
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required />
	</div>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<button type="submit">Login</button>
</form>

<div class="actions">
	No Account? Sign up <a href="/signup">here</a>!<br />
	<a class="btn" href="/">Back</a>
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
	input[type='email'] {
		width: 100%;
	}
	input[type='password'] {
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
