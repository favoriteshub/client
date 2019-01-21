<template>
<div class="v-poster">
	<div class="content">
		<img :src="data[`poster`]" :alt="`${data.title} `">
	</div>

	<div class="selectors">
		<i :class="{star: true, checked: isFavourite}" @click="() => onFavouriteClick(data.id, isFavourite)" />
		<i class="details" @click="onDetailsClick" />
	</div>
</div>
</template>

<script>
export default {
	name: "v-poster",
	props: {
		data: {
			type: Object,
			required: true
		},
		isFavourite: Boolean,
		onFavouriteClick: {
			type: Function,
			required: true
		},
		onDetailsClick: {
			type: Function,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.v-poster {
	display: grid;
	grid-template-columns: auto 40px;

	.selectors {
		width: 40px;
		display: grid;
		grid-auto-flow: row;
		justify-content: center;
		align-items: center;
	}

	img {
		display: block;
		width: 100%;
	}

	i {
		font-size: 1.8rem;
	}

	.details {
		@include icon($icon-info);
	}

	.star {
		@include icon($icon-star);
		color: yellow;

		&:hover {
			@include icon($icon-star, false);
		}

		&.checked {
			@include icon($icon-star, false);

			&:hover {
				@include icon($icon-star);
			}
		}
	}
}
</style>
