<template>
<header class="v-header" v-if="authenticated">
	<router-link to="/" class="home"></router-link>
	<router-link to="/logout" class="logout"></router-link>
</header>

<header class="v-header" v-else>
	<router-link to="/welcome" class="home"></router-link>
	<div class="raftel">
		<router-link to="/login">Log in</router-link>
		<router-link to="/register">Register</router-link>
	</div>
</header>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: "v-header",
	computed: mapState({
		authenticated: (state) => state.auth.authenticated
	})
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

	.raftel {
		a {
			font-style: italic;

			&:hover {
				color: cyan;
			}

			&:first-child {
				margin-right: 20px;
			}
		}
	}
}
</style>
