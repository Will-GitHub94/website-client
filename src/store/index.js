import Vue from "vue";
import Vuex from "vuex";
import showdown from "showdown";
import forEach from "lodash/forEach";

import GitHubApi from "../services/github";

const converter = new showdown.Converter();

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		readme: "",
		architecture: {
			img: [],
			md: [],
			paths: [],
		},
		networking: {
			img: [],
			md: [],
			paths: [],
		},
		cryptography: {
			img: [],
			md: [],
			paths: [],
		},
		machineLearning: {
			img: [],
			md: [],
			paths: [],
		},
	},
	actions: {
		async getReadme({ commit }) {
			await GitHubApi.getREADME()
				.then((resp) => {
					commit("addReadme", {
						readme: resp,
					});
				})
				.catch((err) => {
					console.log(err);
			});
		},
		async getKnowledgeSection({ commit }, section) {
			console.log("\n===== getKnowledgeSection =====");
			console.log(`::: section: ${section}`);
			await GitHubApi[`get${section}`]()
				.then((resp) => {
					console.log("::: resp :::");
					console.log(resp);
					console.log("::: paths :::");
					console.log(resp.paths);
					commit("addKnowledgeSection", {
						section: (section !== "MachineLearning") ? section.toLowerCase() : "machineLearning",
						knowledgeSection: {
							img: resp.img.contents,
							md: resp.md.contents,
							paths: resp.paths.contents,
						},
					});
				})
				.catch((err) => {
					console.log(err);
			});
		},
		async getArchitecture({ dispatch }) {
			await dispatch("getKnowledgeSection", "Architecture");
		},
		async getNetworking({ dispatch }) {
			await dispatch("getKnowledgeSection", "Networking");
		},
		async getCryptography({ dispatch }) {
			await dispatch("getKnowledgeSection", "Cryptography");
		},
		async getMachineLearning({ dispatch }) {
			await dispatch("getKnowledgeSection", "MachineLearning");
		},
	},
	mutations: {
		addReadme(state, payload) {
			console.log("\n===== addReadme =====");
			console.log(`::: readme: ${payload.readme}`);
			const decodedReadme = atob(payload.readme);

			state.readme = converter.makeHtml(decodedReadme);
		},
		addKnowledgeSection(state, payload) {
			console.log(`::: sectionName: ${payload.section}`);
			const decodedMarkdowns = [];
			const decodedImages = [];

			forEach(payload.knowledgeSection.md, (mdFile) => {
				decodedMarkdowns.push(converter.makeHtml(mdFile));
			});
			forEach(payload.knowledgeSection.img, (imgFile) => {
				decodedImages.push(imgFile);
			});

			state[payload.section].md = decodedMarkdowns;
			state[payload.section].img = decodedImages;
			state[payload.section].paths = payload.knowledgeSection.paths;
		},
	},
	getters: {
		getArchitecutePaths: (state) => {
			return state.architecture.paths;
		},
		getNetworkingPaths: (state) => {
			return state.networking.paths;
		},
		getCryptographyPaths: (state) => {
			return state.cryptography.paths;
		},
		getMachineLearningPaths: (state) => {
			return state.machineLearning.paths;
		},
		useReadme: (state) => {
			return state.readme;
		},
	},
	modules: {},
});

export default store;
