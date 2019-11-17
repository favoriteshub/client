<template>
	<form class="v-form" @submit.prevent="$emit(`submit`)">
		<template v-for="field in fields">
			<vInput
				v-if="field.type === `input`"
				:key="`form-input-${field.name}`"
				:label="field.label"
				:name="field.name"
				:type="field.inputType"
				:required="field.required"
				:disabled="field.disabled"
				@change="(value) => callBack(field.name, value)"
				:defaultValue="field.default"
			/>

			<vSelect
				v-else-if="field.type === `select`"
				:key="`form-select-${field.name}`"
				:label="field.label"
				:name="field.name"
				:required="field.required"
				:disabled="field.disabled"
				:options="field.options"
				@change="(value) => callBack(field.name, value)"
				:defaultValue="field.default"
			/>

			<vInput v-else :key="`form-default-${field.name}`" label="undefined" disabled />
		</template>

		<vButton type="submit" name="form-button-submit" :text="submitButtonText" importance="primary" />
	</form>
</template>

<script>
import vInput from "@/components/input";
import vSelect from "@/components/select";
import vButton from "@/components/button";

export default {
	name: "v-form",
	components: {
		vButton,
		vSelect,
		vInput
	},
	props: {
		callBack: {
			type: Function,
			required: true
		},
		submitButtonText: {
			type: String,
			default: "submit"
		},
		fields: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped></style>
