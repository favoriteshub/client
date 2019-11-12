import { noScroll } from "@/helpers/body";

const state = {
	visible: false
};

const getters = {};

const actions = {};

const mutations = {
	close(state) {
		state.visible = false;
		noScroll(false);
	},
	open(state) {
		state.visible = true;
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
