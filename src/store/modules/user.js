import API from "../utils/api";

const state = {
	shows: []
};

const getters = {};

const actions = {
	async getShows({ commit }) {
		const { data: response } = await API({ url: "/users/shows" });

		commit("setList", { list: response, type: "shows" });
	},
	async addShow({ commit }, id) {
		const { data: response } = await API({ method: "post", url: `/users/shows/${id}` });

		commit("add", { obj: response, type: "shows" });
	},
	async removeShow({ commit }, id) {
		await API({ method: "delete", url: `/users/shows/${id}` });

		commit("remove", { id, type: "shows" });
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
