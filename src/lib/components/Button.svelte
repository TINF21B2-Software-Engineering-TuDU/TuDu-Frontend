<script>
	export let label = 'Placeholder';
	export let onclick = () => {
		alert('No onclick function defined!');
	};
</script>

<input class="content" type="button" value={label} on:click={onclick} />

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

	input {
		/* FieldBG */
		background: #686868;
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

		/* Text DarkBG */
		color: #b1b1b1;

		/* FieldBG */
		background: #e9e9e9;
	}

	input:active {
		/* Text LightBG */
		color: #686868;

		/* FieldBG */
		background: #b1b1b1;
	}
</style>
