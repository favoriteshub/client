import Vue from "vue";
import Vuex from "vuex";
import shows from "./modules/showsModule";
import globalPopup from "./modules/globalPopupModule";
import loader from "./modules/loaderModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shows,
    globalPopup,
    loader
  }
});
