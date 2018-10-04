<template>
  <form @submit="submit">
    <cInput
      v-for="(field, index) in fields.list"
      :key="index"
      :label="field.label"
      :name="field.name"
      :type="field.type"
      :disabled="field.disabled"
      :required="field.required"
      :blur="fields.onBlur"
    />
    <cButton type="submit" name="form-submit-button" :text="submitButtonText" importance="primary" />
  </form>
</template>

<script>
import cInput from "@/components/utils/input";
import cButton from "@/components/utils/button";

export default {
  components: {
    cButton,
    cInput
  },
  props: {
    submit: {
      type: Function,
      required: true
    },
    submitButtonText: {
      type: String,
      default: "submit"
    },
    fields: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
