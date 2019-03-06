<template>
	<div class="v-input">
		<label :class="{required}">{{ label }}</label>
		<input
			:type="type"
			:name="name"
			:required="required"
			:disabled="disabled"
			@blur="$emit(`blur`, $event)"
			@input="$emit(`change`, $event)"
		/>
	</div>
</template>

<script>
export default {
	name: "v-input",
	props: {
		type: {
			type: String,
			default: "text"
		},
		name: String,
		label: String,
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
