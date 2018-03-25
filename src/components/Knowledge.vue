<template>
	<Header :have-banner="false" page-title="Knowledge">
		{{ readme }}
	</Header>
</template>

<script>
	import forEach from "lodash/forEach";
	import { mapState } from "vuex";
	// import showdown from "showdown";

	import Header from "./Header";
	import GitHubApi from "../services/github";

	// const converter = new showdown.Converter();

	export default {
		components: {
			Header,
		},
		name: "knowledge",
		computed: mapState([
			"readme",
		]),
		beforeCreate() {
			console.log("\n===== beforeCreate =====");
				GitHubApi.getArchitecture()
					.then((resp) => {
						console.log("::: return - getArchitecture - Vue :::");
							forEach(resp.img, (img) => {
								console.log("::: iteration :::")
								console.log(btoa(img));
							});
					})
					.catch((err) => {
						console.log("::: error - getArchitecture - Vue:::");
							console.log(err);
				});
		},
	};
</script>

<style scoped>

</style>
