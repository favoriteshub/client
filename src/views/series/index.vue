<template>
	<div class="series">
		<div class="info">
			<img :src="info.poster" :alt="`${info.poster} poster`" />
			<h1>{{ info.title }}</h1>

			<div>
				<span>Status:</span>
				<p>{{ info.status }}</p>
				<span>Network:</span>
				<p>{{ info.network }}</p>
				<span>Genre:</span>
				<p>{{ info.genre }}</p>
			</div>
		</div>

		<div class="other">
			<section class="links">
				<a :href="`https://www.youtube.com/results?search_query=${info.title} season 1 trailer`" target="_blank">
					<img src="../../assets/img/yt.png" alt="Trailer" />
				</a>
				<a :href="`https://www.imdb.com/title/${info.imdb}`" target="_blank">
					<img src="../../assets/img/IMDb.png" alt="IMDb logo" />
				</a>
				<a :href="`https://www.thetvdb.com/series/${info.thetvdb}`" target="_blank">
					<img src="../../assets/img/TheTVDB.png" alt="TheTVDB logo" />
				</a>
			</section>

			<section class="summary">
				<p>{{ info.summary }}</p>
			</section>

			<Episodes :seasons="seasons" />
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
	@extend %container;

	.info {
		img {
			width: 100%;
		}

		h1 {
			color: $color-grey-dark;
		}

		div {
			display: grid;
			grid-template-columns: 1fr 1fr;

			p {
				justify-self: end;
			}
		}
	}

	.other {
		.links {
			display: grid;
			grid-column-gap: 10px;
			grid-auto-flow: column;
			justify-content: end;
			margin-bottom: 10px;

			a {
				line-height: 0;
			}
		}

		.summary {
			margin-bottom: 10px;
			text-align: justify;
		}
	}
}
</style>
