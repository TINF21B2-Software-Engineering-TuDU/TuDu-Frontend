<script>
	export let name = "EDIT";
    export let width = "15px";
    export let interactive = false;
    export let onclick = () => {
        alert("No onclick function defined");
    };
    // handle enter keypress
    const handleEnter = (/** @type {{ key: string; }} */ event) => {
        if (event.key === "Enter") {
            onclick();
        }
    };

    // add tabindex to make icon interactive
    $: tabindex = interactive ? 0 : undefined;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div >
    <img id="img" class:content={interactive} src="/icons/{name}.png" alt="{name}" style="width: {width}; height: {width};"
        on:click={onclick} on:keypress={handleEnter} tabindex={tabindex}>
</div>

<style>
    .content {
        cursor: pointer;
    }

    .content:hover {
        filter: brightness(1.8);
    }

    .content:active {
        filter: brightness(1.6);
    }
</style>