<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { lists } = data;

	console.log(data);
	console.log(lists);

    let create_new_list = false;
</script>

<h1>Your Lists</h1>

{#each lists as list}
	<a href="/main/lists/{list.id}">
		<div class="list">
			<h2>{list.title} #{list.id}</h2>
			<p>Description: {list.description}</p>
		</div>
	</a>
{/each}

<hr>

<div class="new_list">
    <p>Create new list <a href="/main/lists/new">here</a>.</p>
</div>

<style>
	.list {
		border: 1px solid gray;
		border-radius: 5px;
		background-color: #213547;
		margin: 5px;
		padding-left: 10px;
	}
</style>
