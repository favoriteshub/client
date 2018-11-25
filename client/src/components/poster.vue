<template>
	<div class="poster">
		<img :src="info.poster" :alt="`${info.title} poster`" />
		<div class="overlay">
			<i class="poster__star" @click="handleIconCLick" :class="{[`poster__star--checked`]: checked}" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: {
			type: Object,
			required: true
		},
		defaultChecked: {
			type: Boolean,
			default: false
		},
		onIconClick: {
			type: Function,
			required: true
		}
	},
	data: function() {
		return {
			checked: this.defaultChecked
		};
	},
	methods: {
		handleIconCLick: function() {
			this.onIconClick(this.info, !this.$data.checked).then(() => {
				this.$data.checked = !this.$data.checked;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.poster {
	width: 100%;
	position: relative;

	img {
		width: 100%;
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

		&--checked {
			@include icon($icon-star, false);

			&:hover {
				@include icon($icon-star);
			}
		}
	}

	&:hover {
		.overlay {
			@include flex-center();
		}
	}
}
</style>
