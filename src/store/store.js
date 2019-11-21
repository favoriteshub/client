import Vue from "vue";
import Vuex from "vuex";

import shows from "@/store/modules/shows";
import popup from "@/store/modules/popup";
import loader from "@/store/modules/loader";
import auth from "@/store/modules/auth";
import user from "@/store/modules/user";

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
