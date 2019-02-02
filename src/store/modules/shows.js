import * as API from "../utils/api";
const {orderBy} = require("lodash");

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
	search(context, name) {
		return API.create({url: "shows/search", params: {name}});
	},
	getInfo({commit, dispatch}, id) {
		return API.get(`shows/${id}`, (response) => {
			commit("setInfo", response.data);

			for (let index = 1; index <= response.data.seasons; index++) {
				dispatch("getSeason", {id, season: index});
			}
		});
	},
	getSeason({commit}, {id, season}) {
		return API.get(`shows/${id}/seasons/${season}`, (response) => commit("setSeason", response.data));
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
