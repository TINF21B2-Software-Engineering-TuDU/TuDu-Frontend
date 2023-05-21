<script>
	export let icon = 'EDIT';
	export let value = '';
	export let placeholder = `Placeholder
Lorem ipsum sit amor ex eordium modi dolor sit mei.
Bla Bla
Bla
+ Bla
+ Bla 
+ Chicken`;

	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="content">
	<Icon name={icon} width="18px" />
	<textarea {placeholder} rows="10">{value}</textarea>
</div>

<style>
	.content {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: first baseline;
		padding: 15px;
		gap: 15px;

		/* FieldBG */
		background: #b1b1b1;
		border-radius: 5px;
	}

	textarea {

		/* Text LightBG */
		color: #686868;

		/* Inside auto layout */
		flex: none;
		order: 1;
		align-self: stretch;
		flex-grow: 1;

		background: none;

		border: none;
	}

    textarea::placeholder {
        color: #4F80E1;
    }

    textarea:focus {
        outline: none;
    }

    textarea {
        resize: vertical;
        margin: -5px; /* No clue why it does not align with the goddamn first baseline */
    }
</style>
