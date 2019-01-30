import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";

import Homepage from "@/views/homepage";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "homepage",
			component: Homepage
		},
		{
			path: "/welcome",
			name: "welcome",
			component: () => import("@/views/welcome")
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/views/auth"),
			props: {location: "register"}
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/auth"),
			props: {location: "login"}
		},
		{
			path: "/series/:seriesId",
			name: "series",
			component: () => import("@/views/series/index")
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
