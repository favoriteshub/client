import * as API from "../utils/api";
import _ from "lodash";

// initial state
const state = {
  search: {
    onlyTitles: [],
    fullList: [],
    noData: false
  }
};

// getters
const getters = {
  getSearchItemByIndex: (state) => (index) => {
    return state.search.fullList[index];
  }
};

// actions
const actions = {
  searchCount({commit, dispatch}, title) {
    return API.get(`shows/search/count?title=${title}`, (resolve) => {
      if (resolve.data.data.count > 0) {
        dispatch("searchPaged", {title, page: 0});
      } else {
        commit("setSearchNoData", true);
      }
    });
  },
  searchPaged({commit}, {title, page}) {
    return API.get(`shows/search/${page}?title=${title}`, (resolve) => {
      commit("setSearchLists", resolve.data.data);
      commit("setSearchNoData", false);
    });
  }
};

// mutations
const mutations = {
  setSearchLists(state, elements) {
    state.search.onlyTitles = _.map(elements, "title");
    state.search.fullList = elements;
  },
  setSearchNoData(state, condition) {
    state.search.noData = condition;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
