import Vue from "vue";
import Vuex from "vuex";

import shows from "./modules/showsModule";
import popup from "./modules/popupModule";
import loader from "./modules/loaderModule";
import auth from "./modules/authModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shows,
    popup,
    loader,
    auth
  }
});
