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

    export let tint = "#eeeeee";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class:content={interactive} >
    <div id="img" style="width: {width}; height: {width};"
        on:click={onclick} on:keypress={handleEnter} tabindex={tabindex} 
        style:background={tint} style:mask="url(/icons/{name}.png)" 
        style:mask-size= "contain" style:mask-repeat="no-repeat" style:mask-position="center"/>
</div>

<style>
    .content {
        cursor: pointer;

        width: max-content;
        height: max-content;
    }

    .content:hover {
        filter: brightness(1.8);
    }

    .content:active {
        filter: brightness(1.6);
    }
</style>