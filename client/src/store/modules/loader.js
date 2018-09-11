import {noScroll} from "@/components/helpers/body";

// initial state
const state = {
  visible: false
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  close(state) {
    state.visible = false;
    noScroll(false);
  },
  open(state) {
    state.visible = true;
    noScroll(true);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
