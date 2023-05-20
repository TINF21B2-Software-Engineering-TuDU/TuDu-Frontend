<!-- import icon from lib -->
<script>
    import Icon from '$lib/components/Icon.svelte';
    import Checkbox from '$lib/components/Checkbox.svelte';
    import Logo from '$lib/components/Logo.svelte';
</script>

<!-- ICON -->
<Icon name="RECURRENCE"/>

<!-- Checkboxes -->
<div style="display: flex; flex-direction: row;">
    <Checkbox checked/>
    <Checkbox/>
</div>

<!-- Logo -->
<div style="display: flex; flex-direction: column;">
    <Logo/>
    <Logo integrated={false}/>
    <Logo label={false}/>
    <Logo label={false} integrated={false}/>
</div>
