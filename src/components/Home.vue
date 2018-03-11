<template>
	<Header :have-banner="true" page-title="Home">

	</Header>
</template>

<script>
	import Header from "./Header";

	export default {
		components: {
			Header,
		},
		name: "Home",
		data() {
			return {
				header: "Hello Vue!",
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
