<template>
	<div class="v-search">
		<vForm @submit="getResults" submitButtonText="search" :fields="form" :callBack="(key, val) => (input = val)" />

		<div class="list">
			<vBanner
				v-for="show in shows"
				:key="show.id"
				:data="show"
				:isFavourite="findIfFavourite(show.id)"
				@favouriteClick="addRemove"
				@detailsClick="redirectToSeriesPage(show.id)"
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
			input: "",
			shows: [],
			form: searchForm
		};
	},
	computed: mapState({
		userShows: (state) => state.user.shows
	}),
	methods: {
		getResults: function() {
			this.$store.dispatch(`shows/search`, this.input).then((response) => (this.shows = response.data));
		},
		redirectToSeriesPage: function(id) {
			this.$router.push(`/series/${id}`);
			this.$store.commit("popup/close");
		},
		addRemove: function(id, toAdd) {
			this.$store.dispatch(`user/${toAdd ? "addShow" : "removeShow"}`, id);
		},
		findIfFavourite(id) {
			return findIndex(this.userShows, { id }) !== -1;
		}
	}
};
</script>

<style lang="scss" scoped>
.v-search {
	display: flex;
	flex-direction: column;
	max-width: 758px;
	height: 100%;

	@include media("m") {
		width: 758px;
	}

	.list {
		margin-top: 20px;
		overflow-y: auto;
		@extend %scrollbar;

		.v-banner {
			margin-bottom: 20px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
