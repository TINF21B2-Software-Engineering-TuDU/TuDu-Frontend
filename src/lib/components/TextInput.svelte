<script>
	export let placeholder = 'Placeholder';
	export let value = '';
	export let icon = 'EDIT';

	import Icon from '$lib/components/Icon.svelte';
	export let iconTint = '#eeeeee';
</script>

<div class="content">
	<Icon name={icon} width="18px" tint={iconTint} />
	<input type="text" {placeholder} {value} />
</div>

<!-- temporary untested css -->
<style>
	.content {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px 15px;
		gap: 15px;
		height: 45px;

		/* FieldBG */
		background: #b1b1b1;
		border-radius: 5px;
	}

	input {
		/* Text LightBG */
		color: #686868;

		/* Inside auto layout */
		flex: none;
		align-self: stretch;
		flex-grow: 1;

		background: none;
		border: none;
	}

	input::placeholder {
		color: #4F80E1;
	}
</style>
