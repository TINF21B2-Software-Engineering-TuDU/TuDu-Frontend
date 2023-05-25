<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import userIcon from '$lib/images/user_icon.png';
</script>

<header>
	<Logo />
	<nav>
		<LinkButton label="Home" destination="/" />
		<LinkButton label="Main" destination="/main" />
		<LinkButton label="About" destination="/about" />
		<LinkButton label={$page.data.user.username} destination="/user" />
		{#if $page.data.user.isLoggedIn}
			<form class="logout" action="/logout" method="POST" use:enhance>
				<Button label="Log Out" button_type="submit" onclick={() => null} />
			</form>
		{:else}
			<LinkButton label="Log In" destination="/login" />
			<LinkButton label="Sign Up" destination="/signup" />
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

	@media (min-width: 480px) {
		header {
			padding: 12px 0;
		}
	}

	nav {
		display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; gap: 10px;
	}
</style>
