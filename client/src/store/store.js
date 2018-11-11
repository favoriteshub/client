import Vue from "vue";
import Vuex from "vuex";

import films from "./modules/films";
import shows from "./modules/shows";
import popup from "./modules/popup";
import loader from "./modules/loader";
import auth from "./modules/auth";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		films,
		shows,
		popup,
		loader,
		auth,
		user
	}
});
