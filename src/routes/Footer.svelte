<script>
	import GitHubLogo from '$lib/images/GitHub-Mark-32px.png';
</script>

<footer>
	<p>
		TuDu - Task Manager <br/> Team TuDu B2
	</p>
	<p>
		GitHub repository:
		<a href="https://github.com/TuDU-SE">
			GitHub <picture><img src={GitHubLogo} alt="GitHubLogo" /></picture>
		</a>
	</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		border-radius: 10px;
		background-color: dimgrey;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
