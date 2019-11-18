import API from "../utils/api";

const state = {
	favoriteShows: []
};

const getters = {};

const actions = {
	async getFavoriteShows({ commit }) {
		const { data: response } = await API({ url: "/users/shows" });

		commit("setFavoriteShows", response);
	},
	async addFavoriteShow({ commit }, id) {
		const { data: response } = await API({ method: "post", url: `/users/shows/${id}` });

		commit("addShow", response);
	},
	async removeFavoriteShow({ commit }, id) {
		await API({ method: "delete", url: `/users/shows/${id}` });

		commit("removeShow", id);
	}
};

const mutations = {
	setFavoriteShows(state, list) {
		state.favoriteShows = list;
	},
	addShow(state, show) {
		state.favoriteShows.push(show);
	},
	removeShow(state, showId) {
		state.favoriteShows = state.favoriteShows.filter((el) => el.id !== showId);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
