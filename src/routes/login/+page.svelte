<script lang="ts">
	import { enhance } from '$app/forms';
	import { validators, HintGroup, Hint, email, required } from 'svelte-use-form';

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

<section>
	<form method="POST" action="/login" use:enhance>
		<div>
			<label for="username">E-Mail:</label><br />
			<input
				type="username"
				name="username"
				id="username"
				bind:value={useremail}
				use:validators={[required]}
			/>
		</div>
		<div class="hint-space">
			<Hint for="username" on="required">Please fill out this field!</Hint>
		</div>
		<div>
			<label for="input_pwd">Password:</label>
			<input
				type="password"
				name="password"
				id="password"
				bind:value={password}
				use:validators={[required]}
			/>
		</div>
		<div class="hint-space">
			<Hint for="password" on="required">Please fill out this field!</Hint>
		</div>

		<div class="submit-container">
			<button type="submit">Login</button>
		</div>

		{#if form?.error}
			<div class="notice error">
				{form.error}
			</div>
		{/if}
	</form>

	<div class="actions">
		No Account? Sign up <a href="/signup">here</a>!<br>
		<a class="btn" href="/">Back</a>
	</div>
</section>

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
</style>
