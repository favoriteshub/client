<template>
  <form @submit="submit">
    <slot></slot>
    <cButton type="submit" name="form-submit-button" :text="submitButtonText" importance="primary" />
  </form>
</template>

<script>
import cButton from "@/components/utils/button";

export default {
  components: {
    cButton
  },
  props: {
    submit: Function,
    submitButtonText: {
      type: String,
      default: "submit"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
