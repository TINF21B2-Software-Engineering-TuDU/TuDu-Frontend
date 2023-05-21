<script>
	export let label = 'Placeholder';
	export let onclick = () => {
		alert('No onclick function defined!');
	};
</script>

<div class="content">
	<input type="button" value={label} on:click={onclick} />
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

	input {
		/* Text */
		font-family: 'Ubuntu', sans-serif, 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 18px;
		display: flex;
		align-items: center;
		text-align: center;

		/* Text LightBG */
		color: #e9e9e9;
		
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
</style>
