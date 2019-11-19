import API from "@/store/utils/api";

const state = {
	show: {
		info: {},
		seasons: []
	}
};

const getters = {};

const actions = {
	search(context, { title, thetvdb = false }) {
		return API({ url: "/shows/search", params: { title, thetvdb } });
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
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
