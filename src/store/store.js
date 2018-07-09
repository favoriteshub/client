import Vue from "vue";
import Vuex from "vuex";
import shows from "./modules/showsModule";
import globalPopup from "./modules/globalPopupModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shows,
    globalPopup
  }
});
