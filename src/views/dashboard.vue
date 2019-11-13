<template>
	<div class="dashboard">
		<vPoster v-for="show in shows" :key="show.id" :data="show" />
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
		shows: (state) => state.user.shows
	}),
	created: function() {
		this.$store.dispatch("user/getShows");
	}
};
</script>

<style lang="scss" scoped>
.dashboard {
	@extend %container;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 40px;
}
</style>
