<template>
	<div class="search-box">
		<Poster
			v-for="(option, index) in options"
			:key="index"
			:info="option"
			:defaultChecked="option.isAssociated"
			:onIconClick="handleIconClick"
		/>
	</div>
</template>

<script>
import Show from "@/components/pages/homepage/Show";
import Poster from "@/components/utils/poster";

export default {
	components: {
		Show,
		Poster
	},
	props: {
		options: {
			type: Array,
			required: true
		}
	},
	methods: {
		handleIconClick: function(item, checked) {
			return checked
				? this.$store.dispatch("user/addShow", {id: item._id, obj: item})
				: this.$store.dispatch("user/removeShow", item._id);
		}
	}
};
</script>

<style lang="scss" scoped>
.search-box {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
	align-content: start;
}
</style>
