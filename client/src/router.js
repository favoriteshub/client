import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/views/homepage/index";
import Welcome from "@/views/welcome";
import Login from "@/views/login";
import Register from "@/views/register";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/",
			name: "homepage",
			component: Homepage
		},
		{
			path: "/welcome",
			name: "welcome",
			component: Welcome
		},
		{
			path: "/register",
			name: "register",
			component: Register
		},
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/logout",
			name: "logout",
			beforeEnter(to, from, next) {
				store.commit("auth/logout");
				next("/welcome");
			}
		}
	]
});

router.beforeEach((to, from, next) => {
	let authenticated = store.state.auth.authenticated;

	if (authenticated) {
		if (to.name === "login" || to.name === "register") {
			next(!from.name ? "/" : false);
		} else {
			next();
		}
	} else {
		let guestSession = to.name === "login" || to.name === "register" || to.name === "welcome";
		next(guestSession ? undefined : "/welcome");
	}
});

export default router;
