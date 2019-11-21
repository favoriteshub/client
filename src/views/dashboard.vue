<template>
	<div class="dashboard">
		<vPoster v-for="show in favoriteShows" :key="show.id" :data="show" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import vPoster from "@/components/poster";

export default {
	name: "dashboard",
	components: {
		vPoster
	},
	computed: mapState({
		favoriteShows: (state) => state.user.favoriteShows
	}),
	created: function() {
		this.$store.dispatch("user/getFavoriteShows");
	}
};
</script>

<style lang="scss" scoped>
.dashboard {
	@extend %container;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 40px;

	@include media("xl") {
		grid-template-columns: repeat(6, 1fr);
	}
}
</style>
