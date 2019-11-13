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
			path: "/dashboard",
			name: "dashboard",
			component: () => import("@/views/dashboard")
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/views/auth"),
			props: { location: "register" }
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/auth"),
			props: { location: "login" }
		},
		{
			path: "/series/:id",
			name: "series",
			component: () => import("@/views/series/index")
		}
	]
});

router.beforeEach((to, from, next) => {
	const authenticated = store.state.auth.authenticated;
	const toGuestPage = to.name === "login" || to.name === "register" || to.name === "homepage";

	if (authenticated) {
		if (toGuestPage) {
			next(!from.name ? "/dashboard" : false);
		} else {
			next();
		}
	} else {
		next(toGuestPage ? undefined : "/");
	}
});

export default router;
