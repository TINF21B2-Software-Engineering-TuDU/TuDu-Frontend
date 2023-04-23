<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { task } = data;

	console.log(data);
</script>

<h1>{task.title} #{task.id}</h1>
<a href="/main/lists/{task.list}">Back</a>

<p>{task.description}</p>
