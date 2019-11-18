import * as API from "../utils/api";

const state = {
	shows: []
};

const getters = {};

const actions = {
	getShows({ commit }) {
		return API.get("/users/shows", (resolve) => {
			commit("setList", { list: resolve.data, type: "shows" });
		});
	},
	addShow({ commit }, id) {
		return API.post(`/users/shows/${id}`, null, (resolve) => {
			commit("add", { obj: resolve.data, type: "shows" });
		});
	},
	removeShow({ commit }, id) {
		return API.del(`/users/shows/${id}`, () => {
			commit("remove", { id, type: "shows" });
		});
	}
};

const mutations = {
	setList(state, { list, type }) {
		state[type] = list;
	},
	add(state, { obj, type }) {
		state[type].push(obj);
	},
	remove(state, { id, type }) {
		state[type] = state[type].filter((el) => el.id !== id);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
