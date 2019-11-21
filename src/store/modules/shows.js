import API from "@/store/utils/api";

const state = {
	show: {
		info: {},
		seasons: []
	},
	search: {
		params: {},
		results: [],
		number: 0
	}
};

const getters = {};

const actions = {
	async search({ commit, state }) {
		const { title, location } = state.search.params;

		const { data: response } = await API({
			url: "/shows/search",
			params: { title, thetvdb: location === "TheTVDB" }
		});

		commit("setSearchResults", response);
	},
	async getInfo({ commit, dispatch }, { id, thetvdb = false }) {
		const { data: response } = await API({ url: `/shows/${id}`, params: { thetvdb } });

		commit("setInfo", response);

		dispatch("getSeasons", response.thetvdbId);
	},
	async getSeasons({ commit }, thetvdbId) {
		const { data: response } = await API({ url: `shows/${thetvdbId}/seasons` });

		commit("setSeasons", response);
	}
};

const mutations = {
	setInfo(state, data) {
		state.show.info = data;
		state.show.seasons = [];
	},
	setSeasons(state, seasons) {
		state.show.seasons = seasons;
	},
	setSearchParam(state, { key, value }) {
		state.search.params[key] = value;
	},
	setSearchResults(state, results) {
		state.search.results = results;
		state.search.number += 1;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
