import axios from "axios";

export default () => {
	return axios.create({
		baseURL: `http://${process.env.API_HOST}:${process.env.API_PORT}/`,
	});
};
