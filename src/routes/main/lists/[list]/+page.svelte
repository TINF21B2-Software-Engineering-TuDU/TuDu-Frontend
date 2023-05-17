<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { list } = data;
</script>

<h1>{list.name} #{list.id}</h1>
<p>{list.description}</p>
<a class="button" href="/main">Back</a>

<div class="tasks">
	<h2>TuDu's:</h2>
	{#each list.items as task}
	<a href='/main/lists/{list.id}/{task.id}'>
		<div class="task">
			<p>{task.name} #{task.id}</p>	
		</div>
	</a>
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