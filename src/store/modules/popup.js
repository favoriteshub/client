import { noScroll } from "@/helpers/body";

const state = {
	visible: false,
	component: {},
	extraClasses: ""
};

const getters = {};

const actions = {};

const mutations = {
	close(state) {
		state.visible = false;
		state.component = {};
		state.extraClasses = "";
		noScroll(false);
	},
	open(state, { component, extraClasses }) {
		state.visible = true;
		state.component = component;
		state.extraClasses = extraClasses;
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
