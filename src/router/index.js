import Vue from "vue";
import forOwn from "lodash/forOwn";
import forEach from "lodash/forEach";
import find from "lodash/find";

import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Knowledge from "@/components/Knowledge";

const router = {
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
			children: [
				{
					path: "/architecture",
					name: "Architecture",
					children: [],
				},
				{
					path: "/networking",
					name: "Networking",
					children: [],
				},
				{
					path: "/cryptography",
					name: "Cryptography",
					children: [],
				},
				{
					path: "/machineLearning",
					name: "Machine Learning",
					children: [],
				},
			],
		},
		{
			path: "/projects",
			name: "Projects",
			component: Projects,
		},
	],
};

// The question is:
// 'Does the previous route already have a child with the same path
// as the current path section?'
const matchingChildRoute = (pathComponent, previousKnowledgeSectionChildRoute) => {
	const section = (pathComponent.indexOf(".") > -1 ? pathComponent.substring(0, pathComponent.indexOf(".")) : pathComponent);

	return find(previousKnowledgeSectionChildRoute.children, (child) => {
		return child.path === `/${section}`;
	});
};

const getNewKnowledgeSectionChildRoute = (pathComponent, arrOfPathComponents) => {
	return {
		path: `/${(pathComponent.indexOf(".") > -1) ? pathComponent.substring(0, pathComponent.indexOf(".")) : pathComponent}`,
		component: () => {
			// If last item in array (a markdown file), create a component for it
			if (arrOfPathComponents.indexOf(pathComponent) === (arrOfPathComponents.length - 1)) {
				return Vue.component(pathComponent.substring(0, pathComponent.indexOf(".")));
			}
			return null;
		},
		children: [],
	};
};

// TODO: Refactoring
const addKnowledgeRoutes = async (allKnowledgeSectionPaths) => {
	const knowledgeRoute = find(router.routes, (route) => {
		return route.name === "Knowledge";
	});
	const knowledgeTree = {};

	let knowledgeSectionType;
	let knowledgeSectionBaseRoute;
	let fullPathSplit = [];
	let previousKnowledgeSectionChildRoute = {};
	let newKnowledgeSectionChildRoute = {};
	let matchingChild = false;

	forOwn(allKnowledgeSectionPaths, (singleKnowledgeSectionPaths) => {
		forEach(singleKnowledgeSectionPaths, (fullPath) => {
			knowledgeSectionType = fullPath.substring(0, fullPath.indexOf("/"));
			fullPathSplit = fullPath.split("/");
			knowledgeSectionBaseRoute = find(knowledgeRoute.children, (child) => {
				return child.path === `/${knowledgeSectionType}`;
			});
			// 1st previous route is ALWAYS the base knowledge type (i.e. 'architecture')
			previousKnowledgeSectionChildRoute = knowledgeSectionBaseRoute;

			// Remove 1st item as is base knowledge section (i.e. 'architecture')
			fullPathSplit.shift();

			// As far as I can see, the iteration is in the correct order from
			// left to right
			forEach(fullPathSplit, (pathComponent) => {
				matchingChild = matchingChildRoute(pathComponent, previousKnowledgeSectionChildRoute);
				if (!matchingChild) {
					newKnowledgeSectionChildRoute =
						getNewKnowledgeSectionChildRoute(pathComponent, fullPathSplit);
					previousKnowledgeSectionChildRoute.children.push(newKnowledgeSectionChildRoute);
					previousKnowledgeSectionChildRoute = newKnowledgeSectionChildRoute;
				} else {
					previousKnowledgeSectionChildRoute = matchingChild;
				}
			});
		});
		knowledgeTree[knowledgeSectionType] = knowledgeSectionBaseRoute;
	});
	router.routes.children = knowledgeTree;
	return router;
};

export default {
	addKnowledgeRoutes,
};
