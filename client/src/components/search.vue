<template>
<div class="v-search">
	<vForm
		:submit="getResults"
		submitButtonText="search"
		:fields="form"
		:callBack="(key, val) => input = val"
	/>

	<div class="list">
		<vShowcase
			v-for="show in shows"
			:key="show.id"
			:data="show"
			type="banner"
			:onFavouriteClick="() => {}"
			:onDetailsClick="() => redirectToSeriesPage(show.id)"
		/>
	</div>
</div>
</template>

<script>
import vForm from "@/components/form";
import vShowcase from "@/components/showcase";
import searchForm from "@/config/form/search.json";

export default {
	name: "v-search",
	components: {
		vForm,
		vShowcase
	},
	data: function() {
		return {
			input: "",
			shows: [],
			form: searchForm
		};
	},
	methods: {
		getResults: function() {
			this.$store.dispatch(`shows/search`, this.input).then((response) => (this.shows = response.data));
		},
		redirectToSeriesPage: function(id) {
			this.$router.push(`/series/${id}`);
			this.$store.commit("popup/close");
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

		.v-showcase {
			margin-bottom: 20px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
