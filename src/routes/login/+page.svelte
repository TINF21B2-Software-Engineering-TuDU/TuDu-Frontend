<script lang="ts">
	import { enhance } from '$app/forms';
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';

	import { user } from '../../store';

	const form = useForm();

	user;

	let useremail: string;
	let password: string;

	const exec_usr_login = () => {
		$user.name = useremail;
		$user.email = useremail;
		$user.passwordHash = password;
		$user.isLoggedIn = true;
		$user.loginTime = new Date();
	};
</script>

<h1>Login</h1>
<p>Please input your credentials</p>

<form id="login_form" use:form method="post" use:enhance>
	<label for="input_email">E-Mail:</label><br />
	<input
		type="email"
		name="email"
		id="email"
		bind:value={useremail}
		use:validators={[required, email]}
	/>
	<div class="hint-space">
		<HintGroup for="email">
			<Hint on="required">Please fill out this field!</Hint>
			<Hint on="email">Please fill in a valid email!</Hint>
		</HintGroup>
	</div>

	<label for="input_pwd">Password:</label>
	<input
		type="password"
		name="password"
		id="password"
		bind:value={password}
		use:validators={[required]}
	/>
	<div class="hint-space">
		<Hint for="password" on="required">Please fill out this field!</Hint>
	</div>
	<button disabled={!$form.valid}>Login</button>
</form>

<!-- back-button -->
<a class="btn" href="/">Back</a>

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
