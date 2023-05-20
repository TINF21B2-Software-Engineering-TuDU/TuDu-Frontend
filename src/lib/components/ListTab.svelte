<script>
	export const types = ['default', 'add'];
	export let type = 'default';
	export let label = 'Label';
	export let selected = false;
	export let color = '#18CDCA';

	import Icon from '$lib/components/Icon.svelte';

	let outline = '1px solid red';

	// bind outline color to color
	$: outline = `1px solid ${color}`;
	// bind outline to '' if selected is false
	$: outline = selected ? outline : '';
	// bind outline to '' if type is add
	$: outline = type === 'add' ? '' : outline;

    let labelcolor = '';
    // bind labelcolor conditionally based on select and type
    $: labelcolor = selected ? '#e9e9e9' : '#686868';
    $: labelcolor = type === 'add' ? '#686868' : labelcolor;
</script>

<div id="list-tab" style="border: {outline}">
	{#if type === 'default'}
		<div class="accent" style="border: 2.5px solid {color};" />
	{:else}
		<div style="width: 5px" />
	{/if}

	{#if type === 'default'}
		<div class="marker" style="background: {color};" />
	{:else}
		<img src="/icons/ADD.png" alt="Add" style="width: 10px;" />
	{/if}

	<div class="label" style="color: {labelcolor}">{label}</div>

	{#if selected}
		<img src="/icons/EDIT.png" alt="Edit" style="width: 15px;" />
	{/if}
</div>

<style>
	#list-tab {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px 10px 0px 0px;
		gap: 15px;

		/* Marker */
		border-radius: 5px;
	}

	.accent {
		/* Accent */
		width: 0px;
		height: 24px;
		position: relative;
		left: -3px;		

		/* rounded caps */
		border-radius: 5px;

		/* Inside auto layout */
		flex: none;
		order: 0;
		flex-grow: 0;
	}

	.marker {
		/* Marker */
		width: 10px;
		height: 10px;

		/* Marker */
		transform: rotate(-45deg);

		/* Inside auto layout */
		flex: none;
		flex-grow: 0;
	}

	.label {
		height: 40px;

		/* Text */
		font-family: 'Ubuntu';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 18px;
		display: flex;
		align-items: center;

		/* Inside auto layout */
		flex: none;
		flex-grow: 1;
	}
</style>