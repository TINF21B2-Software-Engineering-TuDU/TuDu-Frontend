<script lang="ts">
	import { user } from '../store';
	user;

	function logout() {
		console.log('LOGOUT');
		$user = {
			isLoggedIn: false,
			email: null,
			name: null,
			loginTime: new Date('08.04.2023'),
			passwordHash: '0'
		};
		// show_login_form = !show_login_form;

		// TODO: delete cookies and jwt and all the other local user stuff
	}
	$: console.log(`user.loggedIn: ${$user.isLoggedIn}`);
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/main">Main</a>
		<a href="/user">{$user.name}</a>
		<a href="/about">About</a>
		{#if $user.isLoggedIn}
			<button on:click={logout}>Logout</button>
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
	/* .button_group {
      margin: 5px;
    } */
</style>
