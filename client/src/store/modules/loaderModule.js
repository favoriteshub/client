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
  },
  open(state) {
    state.visible = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
