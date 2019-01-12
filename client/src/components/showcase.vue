<template>
<div :class="[`v-showcase`, type]">
	<template v-if="type === `banner`">
		<img :src="data[type]" :alt="`${data.title} `">

		<div class="info">
			<p>{{`${data.title} (${data.status})`}}</p>
			<div>
				<i class="star" @click="onFavouriteClick" />
				<i class="details" @click="onDetailsClick" />
			</div>
		</div>
	</template>

	<template v-else>
		<div class="content">
			<img :src="data[type]" :alt="`${data.title} `">
		</div>

		<div class="selectors">
			<i class="star" @click="onFavouriteClick" />
			<i class="details" @click="onDetailsClick" />
		</div>
	</template>
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

	&.banner {
		.info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 30px;
			background-color: LightSalmon;
			padding: 0 5px;

			p {
				color: #fff;
			}

			.details {
				color: #fff;
				margin-left: 5px;
			}
		}
	}

	&.poster {
		display: grid;
		grid-template-columns: auto 40px;

		.selectors {
			width: 40px;
			display: grid;
			grid-auto-flow: row;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
