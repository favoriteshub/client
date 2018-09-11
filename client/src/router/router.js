import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/components/pages/homepage";
import About from "@/components/pages/about";
import Login from "@/components/pages/login";
import Register from "@/components/pages/register";
import Settings from "@/components/pages/settings";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/register",
      name: "Register",
      component: Register
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
        next("/about");
      }
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
    let guestSession = to.name === "Login" || to.name === "Register" || to.name === "About";
    next(guestSession ? undefined : "/about");
  }
});

export default router;
