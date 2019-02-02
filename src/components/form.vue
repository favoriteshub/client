<template>
	<form class="v-form" @submit.prevent="submit">
		<template v-for="(field, index) in fields">
			<vInput
				v-if="field.type === `input`"
				:key="index"
				:label="field.label"
				:name="field.name"
				:type="field.inputType"
				:required="field.required"
				:disabled="field.disabled"
				:change="(e) => callBack(field.name, e.target.value)"
			/>

			<vSelect
				v-if="field.type === `select`"
				:key="index"
				:label="field.label"
				:name="field.name"
				:required="field.required"
				:disabled="field.disabled"
				:options="field.options"
				:onItemClick="(val) => callBack(field.name, val)"
			/>
		</template>

		<vButton type="submit" name="form-submit-button" :text="submitButtonText" importance="primary" />
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
		submit: {
			type: Function,
			required: true
		},
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
