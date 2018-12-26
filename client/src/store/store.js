import Vue from "vue";
import Vuex from "vuex";

import shows from "./modules/shows";
import popup from "./modules/popup";
import loader from "./modules/loader";
import auth from "./modules/auth";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		shows,
		popup,
		loader,
		auth,
		user
	}
});
