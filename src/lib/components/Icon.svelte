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