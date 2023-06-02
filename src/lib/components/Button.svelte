<script>
	export let label = 'Placeholder';
	export let onclick = () => {
		alert('No onclick function defined!');
	};
	export let button_type = "button";

	export let types = ['default', 'confirm', 'delete'];
	export let type = 'default';

	$: {
		if (!types.includes(type)) {
			console.error(`Invalid type: ${type}`);
			type = 'default';
		}
	}

</script>

<div>
	
	<input
		class="content"
		class:default={type === 'default'}
		class:confirm={type === 'confirm'}
		class:delete={type === 'delete'}
		type={button_type}
		value={label}
		on:click={onclick}
	/>
</div>

<style>
	.content {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px 15px;
		gap: 15px;
		margin-top: 10px;

		height: 45px;
		width: 100%;
	}

	input {
		border-radius: 5px;

		border: none;

		/* Inside auto layout */
		flex: none;
		order: 0;
		align-self: stretch;
		flex-grow: 1;
	}

	input:hover {
		cursor: pointer;
	}

	/* Styles */

	.default {
		/* FieldBG */
		background: #686868;
	}

	.default:hover {
		/* Text DarkBG */
		color: #b1b1b1;

		/* FieldBG */
		background: #e9e9e9;
	}

	.default:active {
		/* Text LightBG */
		color: #686868;

		/* DarkFieldBG */
		background: #b1b1b1;
	}

	.confirm {
		/* Accent color */
		background: #4F80E1;
	}

	.confirm:hover {
		/* Accent color */
		color: #4F80E1;

		/* FieldBG */
		background: #e9e9e9;
	}

	.confirm:active {
		/* Accent color */
		color: #4F80E1;

		/* DarkFieldBG */
		background: #b1b1b1;
	}

	.delete {
		/* Accent color */
		background: #E14F4F;
	}

	.delete:hover {
		/* Accent color */
		color: #E14F4F;

		/* FieldBG */
		background: #e9e9e9;
	}

	.delete:active {
		/* Accent color */
		color: #E14F4F;

		/* DarkFieldBG */
		background: #b1b1b1;
	}


</style>
