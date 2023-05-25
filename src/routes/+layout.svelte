<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import './style.css';
</script>

<div class="page">
	<div class="background" id="bg-layer-1" />
	<div class="background" id="bg-layer-2" />

	<Icon
		name="SIDEBAR-EXPAND"
		width="30px"
		interactive
		onclick={() => {
			alert('//todo:Expand sidebar');
		}}
	/>

	<main><slot /></main>
</div>

<style>
	.page {
		display: flex;
		flex-direction: row;
		flex: 1;

		/* Fix screen exactly without scrolling */
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		margin: none;
		padding: 20px;
		gap: 40px;
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
		top: 0;
		left: 0;
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
