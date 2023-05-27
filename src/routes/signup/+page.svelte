<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Sign Up</h1>
<p>Please provide a new username and a strong password.</p>

<form action="?/signup" method="POST">
	<div>
		<TextInput
			placeholder="E-Mail Adress"
			type="text"
			id="username"
			name="username"
			required={true}
		/>
	</div>

	<div>
		<TextInput placeholder="Password" type="password" id="password" name="password" required={true} />
	</div>

	<div>
		<TextInput placeholder="Reapeat Password" type="password" id="password_repeat" name="password_repeat" required={true} />
	</div>

	{#if form?.user || form?.invalid}
		<p class="error">{form?.info}</p>
	{/if}

	<Button label="Sign Up" button_type="submit" type="confirm" onclick={() => null} />
</form>

<Divider />

<div class="flex-parent">
	<div class="flex-child"><LinkButton destination="/login" label="Login here!" /></div>
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
