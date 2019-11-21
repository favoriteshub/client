<template>
	<div class="v-search">
		<vForm @submit="getResults" submitButtonText="search" :fields="form" :callBack="dataHandler" />

		<p v-if="searchNumber > 0 && searchResults.length === 0">
			No results were found, try changing the search location!
		</p>

		<div class="list">
			<vBanner
				v-for="show in searchResults"
				:key="show.title"
				:data="show"
				:showFavoriteIcon="authenticated && searchParams.location !== `TheTVDB`"
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
			form: searchForm
		};
	},
	computed: mapState({
		favoriteShows: (state) => state.user.favoriteShows,
		authenticated: (state) => state.auth.authenticated,
		showInfo: (state) => state.shows.show.info,
		searchParams: (state) => state.shows.search.params,
		searchResults: (state) => state.shows.search.results,
		searchNumber: (state) => state.shows.search.number
	}),
	watch: {
		showInfo: function(newVal) {
			this.$store.commit("loader/close");
			this.$router.push(`/series/${newVal.id}`);
		}
	},
	methods: {
		getResults: async function() {
			this.$store.dispatch(`shows/search`);
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
		dataHandler: function(key, value) {
			this.$store.commit("shows/setSearchParam", { key, value });
		}
	},
	created: function() {
		this.form = searchForm.map((el) =>
			this.searchParams[el.name] ? { ...el, default: this.searchParams[el.name] } : el
		);
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
