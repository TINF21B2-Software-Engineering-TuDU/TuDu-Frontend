<script lang="ts">
    let items = [
        1, 2, 3, 4, 5, 6, 7
    ]
</script>

<h1>Tasks List</h1>



{#each items as item}
    <p>{item}</p>
{/each}