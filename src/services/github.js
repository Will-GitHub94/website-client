import Api from "@/services/Api";

export default {
	getTree() {
		return Api().get("recursiveTree");
	},
};
