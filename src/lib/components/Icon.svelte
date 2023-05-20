<script>
	let name = '';
    export let width = "15px";
    export { name };
</script>

{#if name === ''}
	<!-- error image -->
	<img src="https://i.imgur.com/8Lg5ZtJ.png" alt="error" style="width: {width}; height: {width};"/>
{:else}
    <img src="/icons/{name}.png" alt="{name}" style="width: {width}; height: {width};">
{/if}
