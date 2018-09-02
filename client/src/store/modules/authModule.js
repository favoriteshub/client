import * as API from "../utils/api";
import router from "@/router/router";

const isAuthenticated = () => {
  let token = localStorage.getItem("token");
  return token !== null;
};

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
  }
};

// mutations
const mutations = {
  authenticateUser(state, apiResponse) {
    localStorage.setItem("token", apiResponse.token);
    API.setHeader(apiResponse.token);
    state.currentUser = apiResponse.data;
    state.authenticated = true;
    router.push("/");
  },
  logout(state) {
    localStorage.clear();
    API.setHeader();
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
