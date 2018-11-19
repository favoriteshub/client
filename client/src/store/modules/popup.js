import {noScroll} from "@/helpers/body";

// initial state
const state = {
	visible: false,
	component: {}
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
	close(state) {
		state.visible = false;
		state.component = {};
		noScroll(false);
	},
	open(state, component) {
		state.visible = true;
		state.component = component;
		noScroll(true);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
