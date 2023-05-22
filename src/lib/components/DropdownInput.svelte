<script>
	export let placeholder = 'Placeholder';
	export let options = ['Option 1', 'Option 2', 'Option 3'];
	export let selected = -1;

    import Icon from '$lib/components/Icon.svelte';
</script>

<div class="content">

    <Icon name="DROPDOWN" width="18px" />

	<select id="select" class="dropdown" bind:value={selected} class:placeholder={selected == -1}>
		<option value={-1} disabled>{placeholder}</option>
		{#each options as option, i}
			<option value={i}>{option}</option>
		{/each}
	</select>
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

		/* FieldBG */
		background: #b1b1b1;
		border-radius: 5px;
	}

	.dropdown {
		/* Text LightBG */
		color: #686868;

		/* Inside auto layout */
		flex: none;
		align-self: stretch;
		flex-grow: 1;

		background: none;
		border: none;

		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	.placeholder {
		color: #4f80e1;
	}

	.dropdown:focus {
		outline: none;
	}
</style>
