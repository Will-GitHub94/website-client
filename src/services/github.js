import Api from "@/services/Api";

export default {
	getREADME() {
		return Api().get("/knowledge")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getArchitecture() {
		console.log("\n===== getArchitecture =====");
		return Api().get("/github/knowledge/architecture")
			.then((resp) => {
				console.log("::: resp.data :::");
				console.log(resp.data);
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getNetworking() {
		return Api().get("/github/knowledge/networking")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getCryptography() {
		return Api().get("/github/knowledge/cryptography")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
	getMachineLearning() {
		return Api().get("/github/knowledge/machineLearning")
			.then((resp) => {
				return resp.data;
			})
			.catch((err) => {
				return err;
		});
	},
};
