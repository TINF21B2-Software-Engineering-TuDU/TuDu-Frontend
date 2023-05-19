<script>
	let name = '';
    export { name };
</script>

<style>
    .icon {
        width: 30px;
        height: 30px;
    }
</style>

{#if name === ''}
	<!-- error image -->
	<img class="icon" src="https://i.imgur.com/8Lg5ZtJ.png" alt="error" />
{:else}
    <img class="icon" src="/icons/{name}.png" alt="{name}">
{/if}
