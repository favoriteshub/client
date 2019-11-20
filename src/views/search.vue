<template>
	<div class="v-search">
		<vForm @submit="getResults" submitButtonText="search" :fields="form" :callBack="dataHandler" />

		<p v-if="searchCarriedOut && shows.length === 0">No results were found, try changing the search location!</p>

		<div class="list">
			<vBanner
				v-for="show in shows"
				:key="show.title"
				:data="show"
				:showFavoriteIcon="authenticated && formValues.location !== `TheTVDB`"
				:isFavorite="findIfFavorite(show.id)"
				@favoriteClick="handleFavoriting"
				@detailsClick="retrieveSeriesInfo(show.thetvdbId)"
			/>
		</div>
	</div>
</template>

<script>
import vForm from "@/components/form";
import vBanner from "@/components/banner";
import searchForm from "@/config/form/search.json";
import { mapState } from "vuex";
import { findIndex } from "lodash";

export default {
	name: "v-search",
	components: {
		vForm,
		vBanner
	},
	data: function() {
		return {
			formValues: {},
			shows: [],
			form: searchForm,
			searchCarriedOut: false
		};
	},
	computed: mapState({
		favoriteShows: (state) => state.user.favoriteShows,
		authenticated: (state) => state.auth.authenticated,
		showInfo: (state) => state.shows.show.info
	}),
	watch: {
		showInfo: function(newVal) {
			this.$store.commit("loader/close");
			this.$router.push(`/series/${newVal.id}`);
		}
	},
	methods: {
		getResults: async function() {
			const { data: shows } = await this.$store.dispatch(`shows/search`, {
				title: this.formValues.title,
				thetvdb: this.formValues.location === "TheTVDB"
			});

			this.shows = shows;

			if (!this.searchCarriedOut) {
				this.searchCarriedOut = true;
			}
		},
		retrieveSeriesInfo: function(thetvdbId) {
			this.$store.commit("loader/open");
			this.$store.dispatch(`shows/getInfo`, { id: thetvdbId, thetvdb: true });
		},
		handleFavoriting: function({ id }, toAdd) {
			const actionName = toAdd ? "user/addFavoriteShow" : "user/removeFavoriteShow";
			this.$store.dispatch(actionName, id);
		},
		findIfFavorite(id) {
			return findIndex(this.favoriteShows, { id }) !== -1;
		},
		dataHandler: function(key, val) {
			this.formValues[key] = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.v-search {
	@extend %container;
	display: flex;
	flex-direction: column;
	max-width: 758px;

	p {
		text-align: right;
		margin-top: 20px;
		color: $color-secondary;
	}

	.list {
		margin-top: 20px;

		.v-banner {
			margin-bottom: 20px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
