import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/components/pages/homepage/Homepage";
import Settings from "@/components/pages/settings/Settings";
import Login from "@/components/pages/login/Login";

Vue.use(Router);

const router = new Router({
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

router.beforeEach((to, from, next) => {
  let authenticated = store.state.auth.authenticated;

  if (authenticated) {
    if (to.name === "Login") {
      next(!from.name ? "/" : false);
    } else {
      next();
    }
  } else {
    next(to.name === "Login" ? undefined : "/login");
  }
});

export default router;
