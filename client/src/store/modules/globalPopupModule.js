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
  close(state) {
    state.visible = false;
  },
  open(state, component) {
    state.visible = true;
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
