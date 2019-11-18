<template>
	<div class="v-search">
		<vForm @submit="getResults" submitButtonText="search" :fields="form" :callBack="dataHandler" />

		<p v-if="searchCarriedOut && shows.length === 0">No results were found, try changing the search location!</p>

		<div class="list">
			<vBanner
				v-for="show in shows"
				:key="show.title"
				:data="show"
				:showFavouriteIcon="authenticated && formValues.location !== `TheTVDB`"
				:isFavourite="findIfFavourite(show.id)"
				@favouriteClick="handleFavouriting"
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
		userShows: (state) => state.user.shows,
		authenticated: (state) => state.auth.authenticated,
		showInfo: (state) => state.shows.show.info
	}),
	watch: {
		showInfo: function(newVal) {
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
			this.$store.dispatch(`shows/getInfo`, { id: thetvdbId, thetvdb: true });
		},
		handleFavouriting: function({ _id }, toAdd) {
			const actionName = toAdd ? "user/addShow" : "user/removeShow";
			this.$store.dispatch(actionName, _id);
		},
		findIfFavourite(id) {
			return findIndex(this.userShows, { id }) !== -1;
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
