<template>
<div class="homepage">
	<vPoster
		v-for="show in shows"
		:key="show.id"
		:data="show"
		:onClick="() => redirectToSeriesPage(show.id)"
	/>
</div>
</template>

<script>
import {mapState} from "vuex";
import vPoster from "@/components/poster";

export default {
	name: "homepage",
	components: {
		vPoster
	},
	computed: mapState({
		shows: (state) => state.user.shows
	}),
	created: function() {
		this.$store.dispatch("user/getShows");
	},
	methods: {
		redirectToSeriesPage: function(id) {
			this.$router.push(`/series/${id}`);
		}
	}
};
</script>

<style lang="scss" scoped>
.homepage {
	@extend %container;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 40px;
}
</style>
