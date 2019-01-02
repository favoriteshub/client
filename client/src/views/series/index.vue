<template>
<div class="series">
	<div class="info">
		<img :src="info.poster" :alt="`${info.poster} poster`">
	</div>

	<div class="other">
		<section class="summary">
			<p>{{info.summary}}</p>
		</section>

		<Episodes :seasons="seasons" />
	</div>
</div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import Episodes from "@/views/series/episodes";

export default {
	name: "series",
	components: {
		Episodes
	},
	computed: {
		...mapState({
			info: (state) => state.shows.show.info
		}),
		...mapGetters({
			seasons: "shows/seasons"
		})
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.$store.dispatch(`shows/getInfo`, to.params.seriesId);
		});
	},
	beforeRouteUpdate(to, from, next) {
		this.$store.dispatch(`shows/getInfo`, to.params.seriesId);
		next();
	}
};
</script>

<style lang="scss" scoped>
.series {
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 40px;
	width: 80%;
	margin: 20px auto 0;

	.info {
		img {
			width: 100%;
		}
	}

	.summary {
		margin-bottom: 20px;
	}
}
</style>
