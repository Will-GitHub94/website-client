import axios from "axios";

export default () => {
	return axios.create({
		baseURL: `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/`,
	});
};
