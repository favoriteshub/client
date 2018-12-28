import axios from "axios";
import {getToken, getRefreshToken, saveTokensInStorage} from "./session";
import store, {resetState} from "@/store/store";

const API = axios.create({
	baseURL: `http://localhost:3000/api`
});

API.interceptors.request.use((config) => {
	const token = getToken();

	if (token != null) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
}, undefined);

API.interceptors.response.use(undefined, (error) => {
	if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
		const data = {token: getToken(), refreshToken: getRefreshToken()};

		return API({method: "post", url: "/auth/refresh", data})
			.then((resolve) => {
				saveTokensInStorage(resolve.data);

				error.config.__isRetryRequest = true;
				return API(error.config);
			})
			.catch(() => {
				resetState();
				store.commit("auth/logout");

				return Promise.reject(error);
			});
	}
	return Promise.reject(error);
});

export function get(url, resolve, reject) {
	return API.get(url)
		.then((response) => {
			if (resolve) {
				resolve(response);
			}
		})
		.catch((error) => {
			console.log(error);
			if (reject) {
				reject(error);
			}
		});
}

export function post(url, data, resolve, reject) {
	return API.post(url, data)
		.then((response) => {
			if (resolve) {
				resolve(response);
			}
		})
		.catch((error) => {
			console.log(error);
			if (reject) {
				reject(error);
			}
		});
}

export function put(url, data, resolve, reject) {
	return API.put(url, data)
		.then((response) => {
			if (resolve) {
				resolve(response);
			}
		})
		.catch((error) => {
			console.log(error);
			if (reject) {
				reject(error);
			}
		});
}

export function del(url, resolve, reject) {
	return API.delete(url)
		.then((response) => {
			if (resolve) {
				resolve(response);
			}
		})
		.catch((error) => {
			console.log(error);
			if (reject) {
				reject(error);
			}
		});
}

export function create(data) {
	return API(data);
}
