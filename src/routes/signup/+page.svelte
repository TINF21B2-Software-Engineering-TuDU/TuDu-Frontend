<script lang="ts">
	import { element } from 'svelte/internal';
	import { useForm, validators, HintGroup, Hint, email, required } from 'svelte-use-form';

	const form = useForm();

	let useremail: string;
	let username: string;
	let password: string;
</script>

<h1>Sign Up</h1>
<p>Please input your credentials</p>

<form id="login_form" use:form method="post">
	<label for="input_name">Name:</label><br />
	<input type="name" name="name" id="name" bind:value={username} use:validators={[required]} />
	<div class="hint-space">
		<Hint on="required">Please fill out this field!</Hint>
	</div>

	<!-- <label for="input_email">E-Mail:</label><br />
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
	</div> -->

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
	<a href="/signup">Sign Up</a>
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
