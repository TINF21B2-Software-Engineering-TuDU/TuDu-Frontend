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
		<p>Here you can view your <a href="/main">lists</a> and <a href="/main/lists/0">tasks</a>!</p>
	{:else}
		<p>Please <a href="/login">login</a> or <a href="/signup">sign up</a>.</p>
	{/if}
</section>
