import Vue from "vue";
import Vuex from "vuex";

import shows from "./modules/shows";
import popup from "./modules/popup";
import loader from "./modules/loader";
import auth from "./modules/auth";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		shows,
		popup,
		loader,
		auth,
		user
	}
});

export default store;

const initialStateCopy = JSON.parse(JSON.stringify(store.state));

export function resetState() {
	store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)));
}
