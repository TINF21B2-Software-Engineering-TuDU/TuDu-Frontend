<script>
	export let label = 'Placeholder';
	export let destination = "/";
</script>

<div class="default">
    <a href="{destination}">{label}</a>
</div>

<style>
	.content {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px 15px;
		gap: 15px;

		height: 45px;
		width: 100%;
	}

	a {
		border-radius: 5px;

		border: none;

		/* Inside auto layout */
		flex: none;
		order: 0;
		align-self: stretch;
		flex-grow: 1;
	}

	a:hover {
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
