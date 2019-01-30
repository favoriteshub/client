<template>
<button
	:type="type"
	:name="name"
	:class="[`v-button`, importance]"
	:disabled="disabled"
	v-on="onClick ? {click: onClick} : {}"
>{{text}}</button>
</template>

<script>
export default {
	name: "v-button",
	props: {
		type: {
			type: String,
			default: "button"
		},
		name: String,
		text: {
			type: String,
			required: false
		},
		importance: {
			type: String,
			validator: (value) => {
				return ["primary", "secondary"].indexOf(value) !== -1;
			}
		},
		disabled: Boolean,
		onClick: Function
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
