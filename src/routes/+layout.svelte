<script>
	import Icon from '$lib/components/Icon.svelte';
	import './style.css';
	import { sidebar_open } from '$lib/stores/sidebar';

	let sidebar_expand = false;
	sidebar_open.subscribe((value) => {
		sidebar_expand = value;
	});
</script>

<div id="supercontainer">
	<aside hidden={sidebar_expand}>Nostrud labore dolor eu ea incididunt qui ipsum laborum Lorem in consectetur.</aside>

	<div class="page">
		<div class="background" id="bg-layer-1" />
		<div class="background" id="bg-layer-2" />

		<div class="pagecontent">
			<Icon
				name={sidebar_expand ? 'SIDEBAR-EXPAND' : 'SIDEBAR-COLLAPSE'}
				width="30px"
				onclick={() => {
					sidebar_open.update((value) => !value);
				}}
			/>

			<main tabindex="-1"><slot /></main>
		</div>
	</div>
</div>

<style>
	#supercontainer {
		display: flex;
		flex-direction: row;
		flex: 1;

		position: fixed;
		bottom: 0;
		top: 0;
		right: 0;
		left: 0;
	}

	aside {
		width: 20rem;
	}

	.page {
		display: flex;
		flex-direction: row;
		flex: 1;
	}
	
	.pagecontent {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 20px;
		margin: none;
		gap: 40px;
		position: relative;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;

		height: 100%;
		overflow: auto;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 100%;

		z-index: -1;
		border-radius: 10px 0 0 0;

		border: 1px solid yellow;
	}

	#bg-layer-1 {
		/* White */
		background: #eeeeee;
		opacity: 0.3;
		border-radius: 10px 0px 0px 0px;
		border: 1px solid blue;
	}

	#bg-layer-2 {
		/* Marker */
		background: linear-gradient(180deg, #18cdca 70%, #8ce8e7 100%);
		opacity: 0.3;
		border-radius: 10px 0px 0px 0px;
		border: 1px solid orange;
	}
</style>
