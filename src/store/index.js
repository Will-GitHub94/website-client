import Vue from "vue";
import Vuex from "vuex";
import showdown from "showdown";

import GitHubApi from "../services/github";

const converter = new showdown.Converter();

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		readme: "",
	},
	actions: {
		getReadme({ commit }) {
			GitHubApi.getREADME()
				.then((resp) => {
					commit("addReadme", {
						readme: resp,
					});
				})
				.catch((err) => {
					console.log(err);
			});
		},
	},
	mutations: {
		addReadme(state, { readme }) {
			const decodedReadme = atob(readme);

			state.readme = converter.makeHtml(decodedReadme);
		},
	},
	getters: {
		useReadme: (state) => {
			return state.readme;
		},
	},
	modules: {},
});

export default store;
