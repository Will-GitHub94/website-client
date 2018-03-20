import Api from "@/services/Api";

export default {
	getArchitecture() {
		return Api().get("/github/architecture");
	},
};
