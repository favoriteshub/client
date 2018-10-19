import * as API from "../utils/api";

// initial state
const state = {
  shows: []
};

// getters
const getters = {};

// actions
const actions = {
  getShows({commit}) {
    return API.get("user-shows", (resolve) => {
      commit("setList", {list: resolve.data, type: "shows"});
    });
  }
};

// mutations
const mutations = {
  setList(state, {list, type}) {
    state[type] = list;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
