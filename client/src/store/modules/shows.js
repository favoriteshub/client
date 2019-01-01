import * as API from "../utils/api";
const {sortBy} = require("lodash");

const state = {
	show: {
		info: {},
		seasons: []
	}
};

const getters = {
	seasons: (state) => {
		return sortBy(state.show.seasons, ["season"]);
	}
};

const actions = {
	search({}, name) {
		return API.create({url: "shows/search", params: {name}});
	},
	getInfo({commit, dispatch}, id) {
		return API.create({url: `shows/${id}`}).then(
			(response) => {
				commit("setInfo", response.data);
				for (let index = 1; index <= response.data.seasons; index++) {
					dispatch("getSeason", {id, season: index});
				}
			},
			(error) => {
				console.log(error);
			}
		);
	},
	getSeason({commit}, {id, season}) {
		return API.create({url: `shows/${id}/seasons/${season}`}).then(
			(response) => {
				commit("setSeason", response.data);
			},
			(error) => {
				console.log(error);
			}
		);
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
