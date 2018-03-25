import Api from "@/services/Api";

export default {
	getREADME() {
		return Api().get("/")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getArchitecture() {
		console.log("\n===== getArchitecture - API =====");
		return Api().get("/github/architecture")
			.then((resp) => {
				console.log("::: returning - getArchitecture - API :::");
				return resp.data;
			})
			.catch((err) => {
				console.log("::: error - getArchitecture - API :::");
				return err;
		});
	},
	getNetworking() {
		return Api().get("/github/networking")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getCryptography() {
		return Api().get("/github/cryptography")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getMachineLearning() {
		return Api().get("/github/machineLearning")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
};
