<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>
<p>Please input your credentials</p>

<form action="?/login" method="post">
	<div>
		<TextInput placeholder="E-Mail Adress" type="text" id="username" name="username" required={true} />
	</div>

	<div>
		<TextInput placeholder="Password" type="password" id="password" name="password" required={true} />
	</div>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<Button label="Log In" button_type="submit" type="confirm" onclick={() => null} />
</form>

<Divider />

<div class="flex-parent">
	<div class="flex-child"><LinkButton destination="/signup" label="Signup here!" /></div>
	<div class="flex-child"><LinkButton destination="/" label="Back" /></div>
</div>

<style>
	form div {
		margin-top: 10px;
	}

	.flex-parent {
		display: flex;
	}

	.flex-child {
		flex: 1;
	}

	.flex-child:first-child {
		margin-right: 5px;
	}
</style>
