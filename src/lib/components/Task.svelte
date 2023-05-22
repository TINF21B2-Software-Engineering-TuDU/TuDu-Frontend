<script lang="ts">
	import type { Task } from "../../entities";

    export let task: Task;
    export let expanded: Boolean = true;

    let color: String;
    if (new Date(task.duedate) > new Date) {
        color = "green";
    } else if (new Date(task.duedate) == new Date) {
        color = "yellow";
    } else {
        color = "red";
    }
    console.log(new Date(task.duedate), new Date)
</script>

<div class="box">
    <h3>{task.title} #{task.task_id}</h3>

    {#if expanded}
        <p>{task.contents}</p>
    {/if}

    <p id="dueDate" style="--theme-color: {color}">Due until {new Date(task.duedate).toLocaleDateString("de-DE")}<sub>Created on {new Date(task.creationdate).toLocaleDateString("de-DE")}</sub></p>
</div>


<style>
    .box {
        border: 1px solid grey;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
    }

    #dueDate {
        color: var(--theme-color);
    }
</style>
