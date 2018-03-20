<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "App",
	};
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	@media (min-width: 576px) {
		.content {
			max-width: 540px;
		}
	}
	@media (min-width: 768px) {
		.content {
			max-width: 720px;
		}
	}
	@media (min-width: 992px) {
		.content {
			max-width: 960px;
		}
	}
	@media (min-width: 1200px) {
		.content {
			max-width: 1140px;
		}
	}
	.content {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
		text-align: left;
	}
	li {
		list-style-type: none;
	}
</style>
