<script>
	export let checked = false;
	let check = () => (checked = !checked);
</script>

<div on:click={check} on:keydown={check} class="bg">
	{#if checked === true}
		<svg
			class="checkmark"
			width="50"
			height="39"
			viewBox="0 0 50 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d_39_220)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M27.206 24.0083L20.1542 30.6348L4.86667 16.2692L11.9184 9.64273L19.9179 17.1598L38.179 0L45.467 6.84852L27.206 24.0083Z"
					fill="#686868"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_39_220"
					x="0.866669"
					y="0"
					width="48.6003"
					height="38.6348"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_220" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_39_220"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	{/if}
</div>

<style>
	.bg {
		width: 37px;
		height: 37px;

		/* Text DarkBG */
		background: #e9e9e9;
		/* Text LightBG */
		border: 3px solid #686868;

		/* circle */
		border-radius: 50%;

		/* margin */
		margin:5px;
	}
	.checkmark {
		/* Center checkmark in circle */
		position: relative;
		top: 0px;
		left: -3px;
	}
</style>
