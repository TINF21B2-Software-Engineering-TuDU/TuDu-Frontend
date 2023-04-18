<script lang="ts">
	import { element } from 'svelte/internal';
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	// let useremail: string;
	// let username: string;
	// let password: string;
</script>

<h1>Sign Up</h1>
<p>Please input your credentials</p>

<form action="?/signup" method="POST">
	<div>
		<label for="username">Name:</label>
		<input type="text" id="username" name="username" required />
	</div>

	<div>
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required />
	</div>

	{#if form?.user}
		<p class="error">{form?.info}</p>
	{/if}

	<div class="btn">
		<button type="submit">Sign Up</button>
	</div>
</form>

<!-- back-button -->
<a class="btn" href="/">Back</a>

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
