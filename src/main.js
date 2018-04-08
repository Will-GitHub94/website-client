// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App";
import store from "./store/index";
import router from "./router";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	store,
	components: { App },
	template: "<App/>",
	mounted: async function () {
		console.log("\n===== mounted ======");
		await this.$store.dispatch("getReadme");
		await this.$store.dispatch("getArchitecture");
		await this.$store.dispatch("getNetworking");
		await this.$store.dispatch("getCryptography");
		await this.$store.dispatch("getMachineLearning");
		console.log("\n===== populated =====");

		const architecturePaths = this.$store.getters.getArchitecturePaths;
		const networkingPaths = this.$store.getters.getNetworkingPaths;
		const cryptographyPaths = this.$store.getters.getCryptographyPaths;
		const machineLearningPaths = this.$store.getters.getMachineLearningPaths;

		console.log("\n===== Paths =====");
		console.log(architecturePaths);
		console.log(networkingPaths);
		console.log(cryptographyPaths);
		console.log(machineLearningPaths);
	},
});
