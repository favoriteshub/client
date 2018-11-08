<template>
	<div class="search-box">
		<div v-for="(option, index) in options" :key="index" class="search-box__element">
			<img :src="option.poster" :alt="`${option.title} poster`" />
			<div class="overlay"><i class="search-box__element__star" @click="handleFavClick(option);" /></div>
		</div>
	</div>
</template>

<script>
import Show from "@/components/pages/homepage/Show";

export default {
	components: {
		Show
	},
	props: {
		options: {
			type: Array,
			required: true
		}
	},
	methods: {
		handleFavClick: function(item) {
			console.log(item);
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

	&__element {
		width: 153px;
		position: relative;

		img {
			width: 100%;
			height: 100%;
		}

		.overlay {
			display: none;
		}

		&__star {
			@include icon($icon-star);
			font-size: 3.6rem;
			color: yellow;

			&:hover {
				@include icon($icon-star, false);
			}
		}

		&:hover {
			.overlay {
				@include flex-center();
			}
		}
	}
}
</style>
