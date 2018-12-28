<template>
<header class="v-header" v-if="authenticated">
	<router-link to="/" class="home"></router-link>
	<div>
		<i class="search" @click="openSearchPopup" />
		<i class="logout" @click="logout" />
	</div>
</header>

<header class="v-header" v-else>
	<router-link to="/welcome" class="home"></router-link>
	<div>
		<router-link to="/login">Log in</router-link>
		<router-link to="/register">Register</router-link>
	</div>
</header>
</template>

<script>
import vSearch from "@/components/search";
import {mapState} from "vuex";

export default {
	name: "v-header",
	computed: mapState({
		authenticated: (state) => state.auth.authenticated
	}),
	methods: {
		openSearchPopup: function() {
			this.$store.commit("popup/open", {component: {name: vSearch}});
		},
		logout: function() {
			this.$store.commit("auth/logout");
		}
	}
};
</script>

<style lang="scss" scoped>
.v-header {
	height: 40px;
	width: 100%;
	background-color: $color-grey-light;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;

	.home {
		@include icon($icon-home);
	}

	.logout {
		@include icon($icon-logout);
	}

	.search {
		@include icon($icon-search);
	}

	div {
		display: grid;
		grid-column-gap: 20px;
		grid-auto-flow: column;

		a {
			font-style: italic;

			&:hover {
				color: cyan;
			}
		}
	}
}
</style>
