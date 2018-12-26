import * as API from "../utils/api";

const state = {
	searchList: []
};

const getters = {};

const actions = {
	searchCount({commit, dispatch}, title) {
		return API.get(`shows/search/count?title=${title}`, (resolve) => {
			if (resolve.data.count > 0) {
				dispatch("searchPaged", {title, page: 0});
			} else {
				commit("setSearchList", []);
			}
		});
	},
	searchPaged({commit}, {title, page}) {
		return API.get(`shows/search/${page}?title=${title}`, (resolve) => {
			commit("setSearchList", resolve.data);
		});
	},
	addShow({}, data) {
		return API.post("shows", data);
	}
};

const mutations = {
	setSearchList(state, elements) {
		state.searchList = elements;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
