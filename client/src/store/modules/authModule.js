import * as API from "../utils/api";
import {isAuthenticated, saveTokensInStorage, removeTokensfromStorage} from "../utils/auth";
import router from "@/router/router";

// initial state
const state = {
  authenticated: isAuthenticated(),
  currentUser: {}
};

// getters
const getters = {};

// actions
const actions = {
  login({commit, state}, data) {
    API.post("/auth/login", data, (resolve) => {
      commit("authenticateUser", resolve.data);
    });
  },
  register({commit, state}, data) {
    API.post("/auth/register", data, (resolve) => {
      commit("authenticateUser", resolve.data);
    });
  }
};

// mutations
const mutations = {
  authenticateUser(state, apiResponse) {
    saveTokensInStorage(apiResponse);
    state.currentUser = apiResponse.data;
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
