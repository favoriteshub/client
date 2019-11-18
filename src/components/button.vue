<template>
	<button :type="type" :name="name" :class="[`v-button`, importance]" :disabled="disabled" @click="$emit(`click`)">
		<slot v-if="this.$slots.default" />
		<template v-else>{{ text }}</template>
	</button>
</template>

<script>
export default {
	name: "v-button",
	props: {
		type: {
			type: String,
			default: "button",
			validator: (value) => ["button", "submit", "reset"].indexOf(value) !== -1
		},
		name: String,
		text: String,
		importance: {
			type: String,
			validator: (value) => ["primary", "secondary"].indexOf(value) !== -1
		},
		disabled: Boolean
	}
};
</script>

<style lang="scss" scoped>
.v-button {
	text-transform: uppercase;
	background-color: #e5e5e5;
	width: 100%;
	height: 40px;
	border: 0;
	border-radius: 3px;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
	}

	&.primary {
		background-color: $color-primary;
		color: #fff;

		&:hover {
			background-color: $color-primary-dark;
		}
	}

	&.secondary {
		background-color: $color-secondary;
		color: #fff;

		&:hover {
			background-color: $color-secondary-dark;
		}
	}
}
</style>
