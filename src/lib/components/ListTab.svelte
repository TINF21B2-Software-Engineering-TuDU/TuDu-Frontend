<script>
	export const types = ['default', 'add'];
	export let type = 'default';
	export let label = 'Label';
	export let selected = false;
	export let color = '#18CDCA';

	// on click and enter events
	// @ts-ignore
	export let onclick = (click) => {
		// if edit icon is clicked, do nothing
		if (click.target.tagName === 'IMG') {
			return;
		}

		alert('No onclick handler defined');
	};

	// dispatch click event on enter
	const handleEnter = (/** @type {{ key: string; }} */ event) => {
		if (event.key === 'Enter') {
			onclick();
		}
	};

	// on edit event
	export let onedit = () => {
		alert('No onedit handler defined');
	};

	// dispatch edit event on enter on edit icon
	const handleEdit = (/** @type {{ key: string; }} */ event) => {
		if (event.key === 'Enter') {
			onedit();
		}
	};

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

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="list-tab" class="content" style="border: {outline}" tabindex="0" on:click={onclick} on:keydown={handleEnter}>
	{#if type === 'default'}
		<div class="accent" style="border: 2.5px solid {color};" />
	{:else}
		<div style="width: 5px" />
	{/if}

	{#if type === 'default'}
			<div class="marker actual" style="background: {color};" />
	{:else}
		<img src="/icons/ADD.png" alt="Add" style="width: 10px;" />
	{/if}

	<div class="label" style="color: {labelcolor}">{label}</div>

	{#if selected}
		<img src="/icons/EDIT.png" alt="Edit" style="width: 15px;" tabindex="0" on:click={onedit} on:keydown={handleEdit} />
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

		width: 100%;
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

	#list-tab:hover {
		cursor: pointer;
	}

	#list-tab:hover .marker {
		opacity: 0.5;
	}


</style>