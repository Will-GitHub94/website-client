<template>
	<div>
		<Header :have-banner="false" page-title="Knowledge"></Header>
		<div v-html="readme"></div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import Header from "./Header";

	export default {
		components: {
			Header,
		},
		name: "knowledge",
		computed: mapState([
			"readme",
		]),
		mounted: function () {
			this.$store.dispatch("getReadme");
		},
	};
</script>

<style scoped>

</style>
