<script>
	// with or witrhout label
	export let label = true;
	// icon loaded per request or integrated
	export let integrated = true;
</script>

<div class="logo">
	{#if integrated}
		<div>
			<!-- /TUDU.svg -->
			<svg
				width="102"
				height="83"
				viewBox="0 0 102 83"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="90.2127"
					height="25.9743"
					transform="matrix(0.701561 -0.71261 0.701561 0.71261 20.0022 64.2864)"
					fill="url(#paint0_linear_22_669)"
				/>
				<rect
					width="25.1322"
					height="54.4842"
					transform="matrix(0.701561 -0.71261 0.701561 0.71261 0 43.9709)"
					fill="#5A5D9D"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_22_669"
						x1="38.9191"
						y1="-17.6136"
						x2="60.1643"
						y2="17.7951"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#9D5A8A" />
						<stop offset="1" stop-color="#5A5D9D" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	{:else}
		<img src="/TUDU.svg" alt="TUDU Logo" />
	{/if}

	{#if label}
		<h1>TuDu</h1>
	{/if}
</div>

<!-- Horizontal flexbox -->
<style>
	.logo {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		border: none;
		margin: none;
		padding: none;
	}

	img,
	svg {
		width: 102px;
		height: 83px;
	}
</style>
