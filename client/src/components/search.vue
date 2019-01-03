<template>
<div class="v-search">
	<div>
		<vInput label="Series" :blur="(e) => input = e.target.value" />
		<vButton importance="primary" :onClick="getResults" text="search" />
	</div>

	<div class="list">
		<vShowcase
			v-for="show in shows"
			:key="show.thetvdb"
			:data="show"
			type="banner"
			:onFavouriteClick="() => {}"
			:onDetailsClick="() => redirectToSeriesPage(show.thetvdb)"
		/>
	</div>
</div>
</template>

<script>
import vInput from "@/components/input";
import vButton from "@/components/button";
import vShowcase from "@/components/showcase";

export default {
	name: "v-search",
	components: {
		vInput,
		vButton,
		vShowcase
	},
	data: function() {
		return {
			input: "",
			shows: []
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
