<template>
<div class="v-search">
	<div>
		<vInput label="Series" :blur="(e) => input = e.target.value" />
		<vButton importance="primary" :onClick="getResults" text="search" />
	</div>

	<div class="list">
		<img v-for="show in shows" :key="show.id" :src="show.banner" :alt="show.title">
	</div>
</div>
</template>

<script>
import vInput from "@/components/input";
import vButton from "@/components/button";

export default {
	name: "v-search",
	components: {
		vInput,
		vButton
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
		@include scrollbar();

		img {
			width: 100%;
			margin-bottom: 20px;
			display: block;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
