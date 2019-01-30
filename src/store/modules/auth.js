import * as API from "../utils/api";
import {isAuthenticated, saveTokensInStorage, removeTokensfromStorage} from "../utils/session";
import router from "@/router";

const state = {
	authenticated: isAuthenticated(),
	currentUser: {}
};

const getters = {};

const actions = {
	login({commit}, data) {
		return API.post("/auth/login", data, (resolve) => {
			commit("authenticateUser", resolve.data);
		});
	},
	register({commit}, data) {
		return API.post("/auth/register", data, (resolve) => {
			commit("authenticateUser", resolve.data);
		});
	}
};

const mutations = {
	authenticateUser(state, apiResponse) {
		saveTokensInStorage(apiResponse);
		state.currentUser = apiResponse.username;
		state.authenticated = true;
		router.push("/");
	},
	logout(state) {
		removeTokensfromStorage();
		state.currentUser = {};
		state.authenticated = false;
		router.push("/welcome");
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
