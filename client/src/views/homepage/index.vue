<template>
	<div class="homepage">
		<div class="homepage__library">
			<Tabs :list="[`Shows`]"><ShowList slot="Shows" /></Tabs>
		</div>

		<div class="homepage__options">
			<div class="homepage__options__search-new">
				<Autocomplete
					text="Search among the existing series or add a new one"
					module="shows"
					orderBy="title"
					:onItemClick="handleSearchClick"
					:onSubmit="handleSearchSubmit"
				/>
				<cButton importance="primary" :action="openAddShowPopup" />
			</div>

			<SearchBox :options="searchedElements" />
		</div>
	</div>
</template>

<script>
import Tabs from "@/components/tabs";
import ShowList from "@/views/homepage/showList";
import Autocomplete from "@/components/autocomplete";
import cButton from "@/components/button";
import SearchBox from "@/views/homepage/searchBox";
import AddShow from "@/views/homepage/addShow";

export default {
	components: {
		Tabs,
		ShowList,
		Autocomplete,
		cButton,
		SearchBox
	},
	data: function() {
		return {
			searchedElements: []
		};
	},
	methods: {
		handleSearchClick: function(item) {
			this.$data.searchedElements = [item];
		},
		handleSearchSubmit: function(items) {
			this.$data.searchedElements = items;
		},
		openAddShowPopup: function() {
			this.$store.commit("popup/open", {name: AddShow});
		}
	}
};
</script>

<style lang="scss" scoped>
.homepage {
	@include viewport-100();
	display: flex;

	&__library {
		width: 70%;
		padding: 20px;
	}

	&__options {
		width: 30%;
		padding: 20px;

		&__search-new {
			display: flex;
			align-items: center;

			button {
				@include icon($icon-plus, false);
				font-size: 2.4rem;
				width: auto;
				padding: 0 10px;
				margin-left: 5px;
			}
		}

		.search-box {
			@include scrollbar();
			margin-top: 20px;
			height: calc(100% - 60px);
			overflow: auto;
		}
	}
}
</style>
