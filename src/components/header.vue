<template>
	<header class="v-header">
		<router-link :to="authenticated ? '/dashboard' : '/'" class="home"></router-link>

		<div>
			<router-link to="/search" class="search"><i /></router-link>

			<i v-if="authenticated" class="logout" @click="$emit('logoutClick')" />

			<template v-else>
				<router-link to="/login">Log in</router-link>
				<router-link to="/register">Register</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	name: "v-header",
	props: {
		authenticated: {
			type: Boolean,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.v-header {
	position: fixed;
	top: 0;
	left: 0;
	height: 40px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $color-grey-light;
	padding: 0 20px;
	z-index: 100;

	.home {
		@include icon($icon-home);
	}

	.logout {
		@include icon($icon-logout);
	}

	.search {
		display: contents;

		&:hover {
			color: #000;
		}

		i {
			@include icon($icon-search);
		}
	}

	div {
		display: grid;
		grid-column-gap: 20px;
		grid-auto-flow: column;
		align-items: center;

		a {
			font-style: italic;

			&:hover {
				color: cyan;
			}
		}
	}
}
</style>
