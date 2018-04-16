<template>
	<div>
		<Header :have-banner="false" page-title="Knowledge"></Header>
		<div v-html="readme"></div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import forEach from "lodash/forEach";
	import Header from "./Header";

	export default {
		components: {
			Header,
		},
		name: "knowledge",
		computed: mapState([
			"readme",
		]),
		methods: {
			changeLinks: function () {
				const dom = this.$el;
				const knowledgeSections = [
					"architecture",
					"networking",
					"machine_learning",
					"cryptography",
				];
				let link;

				forEach(knowledgeSections, (section) => {
					link = dom.querySelector(`a[href='${section}/'`);
					link.setAttribute("href", `#/${section}`);
				});
			},
		},
		updated: function () {
			this.$nextTick(function () {
				this.changeLinks();
			});
		},
	};
</script>

<style scoped>

</style>
