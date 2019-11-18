<template>
	<div class="v-banner">
		<img :src="data[`banner`]" :alt="`${data.title} banner`" />

		<div class="info">
			<p>{{ `${data.title} (${data.status})` }}</p>

			<div>
				<i
					v-if="showFavouriteIcon"
					:class="{ star: true, checked: isFavourite }"
					@click="$emit(`favouriteClick`, data, !isFavourite)"
				/>

				<router-link v-if="data.id" :to="`/series/${data.id}`">
					<i class="details" />
				</router-link>

				<i v-else class="details" @click="$emit(`detailsClick`)" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "v-banner",
	props: {
		data: {
			type: Object,
			required: true
		},
		showFavouriteIcon: Boolean,
		isFavourite: Boolean
	}
};
</script>

<style lang="scss" scoped>
.v-banner {
	img {
		display: block;
		width: 100%;
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

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 35px;
		background-color: LightSalmon;
		padding: 0 5px;

		p {
			color: #fff;
		}

		div {
			display: grid;
			grid-auto-flow: column;
			grid-gap: 5px;
			align-items: center;

			a {
				display: contents;
			}
		}
	}
}
</style>
