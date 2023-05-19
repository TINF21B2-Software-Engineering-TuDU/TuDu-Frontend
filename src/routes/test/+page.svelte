<!-- import icon from lib -->
<script>
    import Icon from '$lib/components/Icon.svelte';
    import Checkbox from '$lib/components/Checkbox.svelte';
</script>

<!-- ICON -->
<Icon name="RECURRENCE"/>

<!--  horizontal flexbox -->
<div style="display: flex; flex-direction: row;">
    <Checkbox checked/>
    <Checkbox/>
</div>
