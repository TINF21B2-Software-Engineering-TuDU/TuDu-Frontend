<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { task } = data;
</script>

<h1>{task.name} #{task.id}</h1>
<a href="/main/lists/{task.list}">Back to List</a>

<tabel>
	<tr>
		<td>Editable</td>
		<td>{#if task.isEditable}Yes{:else}No{/if}</td>
	</tr>
	<tr>
		<td>Completed:</td>
		<td>{#if task.isCompleted}Yes{:else}No{/if}</td>
	</tr>
	<tr>
		<td>Due til:</td>
		<td>{task.dueDate.toLocaleString()}</td>
	</tr>
	<tr>
		<td>Created on:</td>
		<td>{task.creationDate.toLocaleString()}</td>
	</tr>
</tabel>

{#if task.contents === undefined}
<p>No description provided!</p>
{:else}
<p><u>Description:</u>{task.contents}</p>
{/if}