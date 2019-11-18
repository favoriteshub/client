import API from "../utils/api";
const { orderBy } = require("lodash");

const state = {
	show: {
		info: {},
		seasons: []
	}
};

const getters = {
	seasons: (state) => {
		return orderBy(state.show.seasons, (el) => new Number(el.season));
	}
};

const actions = {
	search(context, { title, thetvdb = false }) {
		return API({ url: "/shows/search", params: { title, thetvdb } });
	},
	async getInfo({ commit }, { id, thetvdb = false }) {
		const { data: response } = await API({ url: `/shows/${id}`, params: { thetvdb } });

		commit("setInfo", response);

		// dispatch("getSeasons", response.thetvdbId);
	},
	async getSeason({ commit }, { id, season }) {
		const { data: response } = await API({ url: `shows/${id}/seasons/${season}` });

		commit("setSeason", response);
	}
};

const mutations = {
	setInfo(state, data) {
		state.show.info = data;
		state.show.seasons = [];
	},
	setSeason(state, season) {
		state.show.seasons.push(season);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
