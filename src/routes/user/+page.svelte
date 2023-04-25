<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data;

	console.log(data);
	console.log(user);
</script>

<h1>User Information</h1>
<table>
	<tr>
		<td>Username:</td>
		<td>{user.username}</td>
	</tr>
	<tr>
		<td>Logged in since:</td><td>{user.loginTime.toLocaleString()}</td>
	</tr>
	<tr>
		<td>Registered since:</td>
		<td />
	</tr>
</table>

<div class="actions">
    <a class="btn" href="/logout">Logout</a>
    <a class="btn delete" href="/user/delete_account">Delete Account</a>    
</div>

<style>
	a {
		font-size: larger;
		font-weight: bold;
		color: white;
		text-decoration: inherit;
	}
	.btn {
        margin-top: 10px;
		border: 1px solid grey;
		border-radius: 5px;
		padding: 5px;
        background-color: #0A6B9E;
        width: 25%;
        position: relative;

	}
    .delete {
        border-color: #de2626;
		background-color: red;
    }
</style>
