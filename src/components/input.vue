<template>
	<div class="v-input">
		<label v-if="label" :class="{ required }">{{ label }}</label>

		<input
			:type="type"
			:name="name"
			:value="defaultValue"
			:required="required"
			:disabled="disabled"
			@blur="$emit(`blur`, $event.target.value)"
			@input="$emit(`change`, $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: "v-input",
	props: {
		type: {
			type: String,
			default: "text",
			validator: (value) => ["email", "file", "number", "password", "tel", "text"].indexOf(value) !== -1
		},
		label: String,
		name: String,
		defaultValue: String,
		required: Boolean,
		disabled: Boolean
	}
};
</script>

<style lang="scss" scoped>
.v-input {
	margin-bottom: 20px;

	label {
		display: block;
		margin-bottom: 3px;
		font-size: 1.4rem;
		color: rgba(#000000, 0.6);
	}

	input {
		@extend %input;
	}
}
</style>
