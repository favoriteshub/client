import * as API from "../utils/api";
import {isAuthenticated, saveTokensInStorage, removeTokensfromStorage} from "../utils/session";
import router from "@/router";

// initial state
const state = {
	authenticated: isAuthenticated(),
	currentUser: {}
};

// getters
const getters = {};

// actions
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

// mutations
const mutations = {
	authenticateUser(state, apiResponse) {
		saveTokensInStorage(apiResponse);
		state.currentUser = apiResponse.username;
		state.authenticated = true;
		router.push("/");
	},
	logout(state) {
		removeTokensfromStorage();
		state.authenticated = false;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
