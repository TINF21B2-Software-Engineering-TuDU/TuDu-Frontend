<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
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
	<div class="content">
		<label for="username">Name:</label>
		<TextInput placeholder="E-Mail Adress" type="text" id="username" name="username" required="{true}"></TextInput>
		<!-- <input type="text" id="username" name="username" placeholder="E-Mail Adress" required /> -->
	</div>

	<div class="content">
		<label for="password">Password:</label>
		<!-- <input type="password" id="password" name="password" placeholder="Password" required/> -->
		<TextInput placeholder="Password" type="password" id="password" name="password" required="{true}"></TextInput>
	</div>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<Button label="Log In" button_type="submit" onclick="{() => null}"/>
</form>

<Divider />

<div class="actions">
	No Account? Sign up <a href="/signup">here</a>!<br />
	<a class="btn" href="/">Back</a>
</div>

<style>
	.error {
		color: red;
	}
</style>
