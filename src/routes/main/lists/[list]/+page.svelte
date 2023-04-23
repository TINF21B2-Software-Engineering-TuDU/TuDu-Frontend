<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { list } = data;

	console.log(data);
</script>

<h1>{list.title} #{list.id}</h1>
<a href="/main">Back</a>
<p>{list.description}</p>

<div class="tasks">
	<h2>TuDu's:</h2>
	{#each list.tasks as task}
	<div class="task">
		<a href='/main/lists/{list.id}/{task.id}'><p>{task.id}</p></a>
	</div>
	{/each}
</div>

<hr>

<div class="new_task">
    <p>Create new task <a href="/main/lists/{list.id}/new">here</a>.</p>
</div>

<style>
	.task {
		border: 1px solid gray;
		border-radius: 5px;
		background-color: #213547;
		margin: 5px;
		padding-left: 10px;
	}
</style>