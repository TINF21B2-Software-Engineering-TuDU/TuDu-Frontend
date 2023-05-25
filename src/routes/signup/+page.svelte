<script lang="ts">
	import { element } from 'svelte/internal';
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import TextInput from '$lib/components/TextInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';

	export let form: ActionData;
</script>

<h1>Sign Up</h1>
<p>Please input your credentials</p>

<form action="?/signup" method="POST">
	<div class="content">
		<label for="username">Name:</label>
		<TextInput placeholder="E-Mail Adress" type="text" id="username" name="username" required="{true}"></TextInput>
	</div>

	<div class="content">
		<label for="password">Password:</label>
		<TextInput placeholder="Password" type="password" id="password" name="password" required="{true}"></TextInput>
	</div>

	{#if form?.user || form?.invalid}
		<p class="error">{form?.info}</p>
	{/if}

	<Button label="Sign Up" button_type="submit" type="confirm" onclick="{() => null}"/>
</form>

<Divider />

<LinkButton destination="/login" label="Login here!"/>
<LinkButton destination="/" label="Back"/>

<style>
	.error {
		color: red;
	}
</style>
