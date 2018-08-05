const isAuthenticated = () => {
  let token = localStorage.getItem("token");
  return token !== null;
};

// initial state
const state = {
  authenticated: isAuthenticated()
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  login(state, token) {
    localStorage.setItem("token", token);
    state.authenticated = true;
  },
  logout(state) {
    localStorage.clear();
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
