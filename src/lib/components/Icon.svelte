<script>
	export let name = "EDIT";
    export let width = "15px";
    /**
	 * @type {{ (): void; toString: () => string; } | undefined}
	 */
     export let onclick = undefined;
    // handle enter keypress
    const handleEnter = (/** @type {{ key: string; }} */ event) => {
        if (event.key === "Enter") {
            // call onclick if it is set
            if (onclick) {
                onclick();
            }
        }
    };

    // icon is only interactive if onclick is not being set
    const interactive = !!onclick;
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