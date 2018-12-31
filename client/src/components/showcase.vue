<template>
<div class="v-showcase">
	<img :src="data[type]" :alt="`${data.title} ${type}`">
	<div class="info">
		<h4>{{`${data.title} (${data.status})`}}</h4>
		<div>
			<i class="star" @click="onFavouriteClick" />
			<i class="details" @click="onDetailsClick" />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "v-showcase",
	props: {
		data: {
			type: Object,
			required: true
		},
		type: {
			type: String,
			required: true,
			validator: (value) => {
				return ["banner", "poster"].indexOf(value) !== -1;
			}
		},
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
.v-showcase {
	img {
		display: block;
		width: 100%;
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		background-color: LightSalmon;
		padding: 0 5px;

		h4 {
			color: #fff;
		}

		i {
			font-size: 1.8rem;
		}

		.details {
			@include icon($icon-info);
			color: #fff;
			margin-left: 5px;
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
}
</style>
