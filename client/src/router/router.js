import Vue from "vue";
import Router from "vue-router";
import Homepage from "@/components/pages/homepage/Homepage";
import Settings from "@/components/pages/settings/Settings";
import Login from "@/components/pages/login/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
