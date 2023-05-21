<!-- import icon from lib -->
<script>
	import Icon from '$lib/components/Icon.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import ListTab from '$lib/components/ListTab.svelte';
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
</script>

<!-- ICON -->
<Icon name="RECURRENCE" width="30px" />

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
	<ListTab selected color="blue" />
	<ListTab />
	<ListTab type="add" />
</div>

<Divider />

<!-- Button -->
<div style="display: flex; flex-direction: column; gap: 10px;">
	<Button
		label="This is a custom Label"
		onclick={() => {
			alert('yay!');
		}}
	/>
	<Button />
</div>

<Divider />

<!-- TextInput -->

<div style="display: flex; flex-direction: column; gap: 10px;">
	<TextInput/>
	<TextInput placeholder="Recurrence mode" icon="RECURRENCE" />
</div>
