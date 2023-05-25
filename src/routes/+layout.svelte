<script lang="ts">
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './style.css';
</script>

<div class="app">
	<Header />

	<div class="page">
		<div class="background" id="bg-layer-1" />
		<div class="background" id="bg-layer-2" />
		<main><slot /></main>
	</div>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
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
	}

	.page {
		position: relative;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		z-index: -1;
		border-radius: 10px 0 0 0;
	}

	#bg-layer-1 {
		/* White */
		background: #eeeeee;
		opacity: 0.3;
		border-radius: 10px 0px 0px 0px;
	}

	#bg-layer-2 {
		/* Marker */
		background: #18cdca;
		opacity: 0.3;
		border-radius: 10px 0px 0px 0px;
	}
</style>
