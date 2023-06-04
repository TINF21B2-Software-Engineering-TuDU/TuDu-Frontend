<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { sidebar_open } from '$lib/stores/sidebar';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';
	import './style.css';

	let sidebar_expand = false;
	sidebar_open.subscribe((value) => {
		sidebar_expand = value;
	});

	import Button from '$lib/components/Button.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import ListTab from '$lib/components/ListTab.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	// DATA
	export let data: PageData;

	const { lists } = data;
</script>

<div id="supercontainer">
	<aside style:width={sidebar_expand ? '350px' : '0px'}>
		{#if sidebar_expand}
			<div
				id="sidebar_content"
				in:fade={{ duration: 3000, easing: cubicOut }}
				out:fade={{ duration: 3000, easing: cubicOut }}
			>
				<Logo />
				<TextInput placeholder="Search" icon="SEARCH" />
				<!-- LISTS -->
				{#if lists != null}
					{#each lists as list}
						<LinkButton label="{list.list_name}" destination="/main/lists/{list.list_id}"/>
					{/each}
				{:else}
					<p>You have no lists!</p>
				{/if}

				<ListTab
					type="ADD"
					label="New List"
					onclick={() => {
						alert('//todo: Add new list');
					}}
				/>

				<div class="sidebarspacer" />

				<div class="button-container">
					

						<Icon
							name="USER"
							width="45px"
							onclick={() => {
								alert('//todo: Settings');
							}}
						/>


						<form class="logout" action="/logout" method="POST">
							<Button label="Logout" type="delete" button_type="submit" onclick={() => null} />
						</form>
				</div>
			</div>
		{/if}
	</aside>

	<div class="page">
		<div class="background" id="bg-layer-0" />
		<div class="background" id="bg-layer-1" />
		<div class="background" id="bg-layer-2" />

		<div class="pagecontent">
			<Icon
				name={sidebar_expand ? 'SIDEBAR-COLLAPSE' : 'SIDEBAR-EXPAND'}
				width="30px"
				onclick={() => {
					sidebar_open.update((value) => !value);
				}}
			/>

			<main tabindex="-1"><slot /></main>
		</div>
	</div>
</div>

<style>
	#supercontainer {
		display: flex;
		flex-direction: row;
		flex: 1;

		position: fixed;
		bottom: 0;
		top: 0;
		right: 0;
		left: 0;
	}

	aside {
		transition: width 1s ease-in-out;

		z-index: -1000;
	}

	#sidebar_content {
		/* Left Bar */

		/* Auto layout */
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 20px;
		gap: 5px;

		margin-bottom: auto;

		position: relative;
		width: 310px;
		height: 100%;
		left: 0px;
		top: -10px; /* cannot get the logo reduced to correct hight xD */
	}

	.sidebarspacer {
		/* fill all the rest of the flexbox */
		flex: 1;
	}

	.button-container {
		display: flex;
		flex-direction: row;
		gap: 30px;

		width: 100%;
		justify-content: center;
		align-items: baseline;
	}

	.page {
		display: flex;
		flex-direction: row;
		flex: 1;
	}

	.pagecontent {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 20px;
		margin: none;
		gap: 40px;
		position: relative;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;

		height: 100%;
		overflow: auto;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 100%;

		z-index: -1;
		border-radius: 10px 0 0 0;
	}

	#bg-layer-0 {
		background: #292c44;
		opacity: 1;
	}

	#bg-layer-1 {
		/* White */
		background: #eeeeee;
		opacity: 0.3;
	}

	#bg-layer-2 {
		/* Marker */
		background: linear-gradient(180deg, #18cdca 70%, #8ce8e7 100%);
		opacity: 0.3;
	}
</style>
