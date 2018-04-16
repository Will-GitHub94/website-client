// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App";
import store from "./store/index";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.config.productionTip = false;

(async () => {
	await store.dispatch("getReadme");
	await store.dispatch("getArchitecture");
	await store.dispatch("getNetworking");
	await store.dispatch("getCryptography");
	await store.dispatch("getMachineLearning");

	const architecturePaths = store.getters.getArchitecturePaths;
	const networkingPaths = store.getters.getNetworkingPaths;
	const cryptographyPaths = store.getters.getCryptographyPaths;
	const machineLearningPaths = store.getters.getMachineLearningPaths;

	const knowledgePaths = {
		architecturePaths,
		networkingPaths,
		cryptographyPaths,
		machineLearningPaths,
	};
	const vueRouter = new Router(await router.addKnowledgeRoutes(knowledgePaths));

	/* eslint-disable no-new */
	new Vue({
		el: "#app",
		vueRouter,
		store,
		components: { App },
		template: "<App/>",
	});
})();
