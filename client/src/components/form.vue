<template>
  <form @submit="submit">
    <template v-for="(field, index) in fields">
      <cInput
        v-if="field.type === `input`"
        :key="index"
        :label="field.label"
        :name="field.name"
        :type="field.inputType"
        :required="field.required"
        :disabled="field.disabled"
        :blur="(e) => callBack(field.name, e.target.value)"
      />

      <cSelect
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

    <cButton type="submit" name="form-submit-button" :text="submitButtonText" importance="primary" />
  </form>
</template>

<script>
import cInput from "@/components/input";
import cSelect from "@/components/select";
import cButton from "@/components/button";

export default {
	components: {
		cButton,
		cSelect,
		cInput
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

<style lang="scss" scoped>
</style>
