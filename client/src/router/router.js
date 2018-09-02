import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/components/pages/homepage/Homepage";
import Guest from "@/components/pages/guest/Guest";
import Login from "@/components/pages/login/Login";
import Register from "@/components/pages/register/Register";
import Settings from "@/components/pages/settings/Settings";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/guest",
      name: "Guest",
      component: Guest
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/logout",
      name: "Logout",
      beforeEnter(to, from, next) {
        store.commit("auth/logout");
        next("/guest");
      }
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    }
  ]
});

router.beforeEach((to, from, next) => {
  let authenticated = store.state.auth.authenticated;

  if (authenticated) {
    if (to.name === "Login" || to.name === "Register") {
      next(!from.name ? "/" : false);
    } else {
      next();
    }
  } else {
    let guestSession = to.name === "Login" || to.name === "Register" || to.name === "Guest";
    next(guestSession ? undefined : "/guest");
  }
});

export default router;
