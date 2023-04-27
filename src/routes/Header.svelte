<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/main">Main</a>
		<a href="/user">{$page.data.user.username}</a>
		<a href="/about">About</a>
		{#if $page.data.user.isLoggedIn}
			<a href="/logout/{$page.data.user.username}">Logout</a>
		{:else}
			<a href="/login">Login</a><a href="/signup">Sign Up</a>
		{/if}
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		border-radius: 10px;
		background-color: dimgrey;
	}

	header a {
		font-weight: bold;
		padding: 3px;
		border-radius: 2px;
		background-color: #292c44;
	}

	@media (min-width: 480px) {
		header {
			padding: 12px 0;
		}
	}
</style>
