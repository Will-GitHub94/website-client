import Vuex from "vuex";
import showdown from "showdown";

import Api from "../services/Api";

const converter = new showdown.Converter();

const store = new Vuex.Store({
	state: {
		readme: "",
	},
	actions: {
		getReadme({ commit }) {
			Api().get("/")
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
			state.readme = readme;
		},
	},
	getters: {
		getReadme: (state) => {
			const decodedReadme = atob(state.readme);

				return converter.makeHtml(decodedReadme);
		},
	},
	modules: {},
});

export default store;
