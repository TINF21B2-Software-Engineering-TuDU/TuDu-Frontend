<script lang="ts">
	import type {PageData} from './$types';

	export let data: PageData;

	const { user } = data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="TuDu - Task Manager" />
</svelte:head>

<section>
	<h1>Welcome to our landing page!</h1>
	{#if user.isLoggedIn}
		<p>You can view your lists and tasks here!</p>
	{:else}
		<p>Please <a href="/login">login here</a> or <a href="/signup">sign up</a>.</p>
	{/if}
</section>
