import * as API from "../utils/api";
import _ from "lodash";

// initial state
const state = {
  showsList: []
};

// getters
const getters = {};

// actions
const actions = {
  getShows({commit}) {
    return API.get("user-shows", (resolve) => {
      commit("setList", resolve.data);
    });
  },
  addShow({commit}, data) {
    return API.post("shows", data, (resolve) => {
      commit("addShow", resolve.data);
    });
  },
  updateShow({commit}, {id, data}) {
    return API.put(`shows/${id}`, data, (resolve) => {
      commit("updateShow", {id, data});
    });
  },
  deleteShow({commit}, id) {
    return API.del(`shows/${id}`, (resolve) => {
      commit("removeShow", id);
    });
  }
};

// mutations
const mutations = {
  setList(state, shows) {
    state.showsList = shows.data;
  },
  addShow(state, show) {
    state.showsList.push(show);
  },
  removeShow(state, id) {
    state.showsList = _.filter(state.showsList, (elem) => elem._id !== id);
  },
  updateShow(state, {id, data}) {
    let index = _.findIndex(state.showsList, {_id: id});
    let keys = _.keys(data);
    for (let key of keys) {
      state.showsList[index][key] = data[key];
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
