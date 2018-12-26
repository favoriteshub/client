import * as API from "../utils/api";

const state = {
	shows: []
};

const getters = {};

const actions = {
	getShows({commit}) {
		return API.get("user-shows", (resolve) => {
			commit("setList", {list: resolve.data, type: "shows"});
		});
	},
	addShow({commit}, {id, obj}) {
		return API.post(`user-shows/${id}`, null, (resolve) => {
			commit("add", {obj, type: "shows"});
		});
	},
	removeShow({commit}, id) {
		return API.del(`user-shows/${id}`, (resolve) => {
			commit("remove", {id, type: "shows"});
		});
	}
};

const mutations = {
	setList(state, {list, type}) {
		state[type] = list;
	},
	add(state, {obj, type}) {
		state[type] = [...state[type], obj];
	},
	remove(state, {id, type}) {
		state[type] = state[type].filter((el) => el._id !== id);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
