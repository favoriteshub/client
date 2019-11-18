import API from "../utils/api";
import { isAuthenticated, saveTokensInStorage, removeTokensfromStorage } from "../utils/session";
import router from "@/router";

const state = {
	authenticated: isAuthenticated()
};

const getters = {};

const actions = {
	async login({ commit }, data) {
		const { data: response } = await API({ method: "post", url: "/auth/login", data });

		commit("authenticateUser", response);
	},
	async register({ commit }, data) {
		const { data: response } = await API({ method: "post", url: "/users", data });

		commit("authenticateUser", response);
	}
};

const mutations = {
	authenticateUser(state, { token, refreshToken }) {
		saveTokensInStorage(token, refreshToken);
		state.authenticated = true;
		router.push("/dashboard");
	},
	logout(state) {
		removeTokensfromStorage();
		state.authenticated = false;
		router.push("/");
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
