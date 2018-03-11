import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Knowledge from "@/components/Knowledge";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/about-me",
			name: "About Me",
			component: AboutMe,
		},
		{
			path: "/knowledge",
			name: "Knowledge",
			component: Knowledge,
		},
		{
			path: "/projects",
			name: "Projects",
			component: Projects,
		},
	],
});
