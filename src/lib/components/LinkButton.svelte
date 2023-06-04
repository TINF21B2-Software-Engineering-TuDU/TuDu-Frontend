<script>
	import Button from "./Button.svelte";

	export let label = 'Placeholder';
	export let destination = "/";
</script>

<a data-sveltekit-preload-data="tap"  href="{destination}">
	<Button label="{label}" onclick="{() => null}"/>
</a>

