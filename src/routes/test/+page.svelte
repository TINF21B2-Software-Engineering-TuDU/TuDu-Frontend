<!-- import icon from lib -->
<script>
	import Icon from '$lib/components/Icon.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import ListTab from '$lib/components/ListTab.svelte';
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import DropdownInput from '$lib/components/DropdownInput.svelte';
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

<!-- Button Types -->

<!-- grid of 2x2 buttons -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
	<Button label="Default" />
	<Button label="Confirm" type="confirm" />
	<Button label="Delete" type="delete" />
</div>

<Divider />

<!-- TextInput -->

<div style="display: flex; flex-direction: column; gap: 10px;">
	<TextInput />
	<TextInput placeholder="Recurrence mode" icon="RECURRENCE" />
</div>

<Divider />

<!-- Headings -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>

<Divider />

<!-- Paragraph -->
<p>
	Duis quis nisi non exercitation excepteur ut nulla tempor labore in cupidatat. Ullamco
	exercitation elit quis ipsum. Cillum dolore adipisicing do eiusmod nisi cupidatat reprehenderit
	duis sunt sunt aute incididunt et dolore.
</p>

<!-- Just text -->
Nulla adipisicing voluptate do irure adipisicing non deserunt. Occaecat nostrud velit ut incididunt sit.
Reprehenderit sint amet nulla commodo nulla fugiat sint magna labore dolore anim aliqua velit. Irure
Lorem magna ex ex. Excepteur quis aliquip mollit consequat laboris sint dolore non ullamco aliquip aliqua
id dolore cupidatat. Sunt cillum mollit amet sunt ex do. Pariatur amet sint irure ex enim do veniam excepteur
cupidatat.

<Divider />

<!-- TextArea -->
<TextArea />

<Divider />

<!-- DropdownInput -->
<DropdownInput />
