import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/views/homepage";
import Welcome from "@/views/welcome";
import Auth from "@/views/auth";

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
			component: Auth,
			props: {location: "register"}
		},
		{
			path: "/login",
			name: "login",
			component: Auth,
			props: {location: "login"}
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
