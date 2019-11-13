import * as API from "../utils/api";
import { isAuthenticated, saveTokensInStorage, removeTokensfromStorage } from "../utils/session";
import router from "@/router";

const state = {
	authenticated: isAuthenticated(),
	currentUser: {}
};

const getters = {};

const actions = {
	login({ commit }, data) {
		return API.post("/auth/login", data, (resolve) => {
			commit("authenticateUser", resolve.data);
		});
	},
	register({ commit }, data) {
		return API.post("/users", data, (resolve) => {
			commit("authenticateUser", resolve.data);
		});
	}
};

const mutations = {
	authenticateUser(state, { username, token, refreshToken }) {
		saveTokensInStorage(token, refreshToken);
		state.currentUser = username;
		state.authenticated = true;
		router.push("/dashboard");
	},
	logout(state) {
		removeTokensfromStorage();
		state.currentUser = {};
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
