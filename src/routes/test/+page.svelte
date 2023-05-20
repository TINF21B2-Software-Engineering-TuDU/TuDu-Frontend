<!-- import icon from lib -->
<script>
	import Icon from '$lib/components/Icon.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Divider from '$lib/components/Divider.svelte';
    import ListTab from '$lib/components/ListTab.svelte';
</script>

<!-- ICON -->
<Icon name="RECURRENCE" />

<!-- Checkboxes -->
<div style="display: flex; flex-direction: row;">
	<Checkbox checked />
	<Checkbox />
</div>

<!-- Logo -->
<div style="display: flex; flex-direction: column;">
	<div style="display: flex; flex-direction: row; align-items: baseline; gap: 10px;">
		<Logo />
		<Logo label={false} />
	</div>
	<div style="display: flex; flex-direction: row; align-items: baseline; gap: 10px;">
		<Logo integrated={false} />
		<Logo label={false} integrated={false} />
	</div>
</div>

<!-- Divider -->
<Divider />
<Divider />

<!-- List Tab -->
<div style="display: flex; flex-direction: column; gap: 10px;">
    <ListTab selected />
    <ListTab selected color='blue' />
    <ListTab />
    <ListTab type="add"/>
</div>
