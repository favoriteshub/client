import * as API from "../utils/api";
import _ from "lodash";

// initial state
const state = {
  visible: false,
  component: {}
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  setVisibility(state, status) {
    state.visible = status;
  },
  setComponent(state, component) {
    state.component = component;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
