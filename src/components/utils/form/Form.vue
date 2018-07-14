<template>
  <form @submit="submit">
    <slot></slot>
    <Button type="submit" name="form-submit-button" :text="submitButtonText" importance="primary" />
  </form>
</template>

<script>
import Button from "@/components/utils/button/Button";

export default {
  components: {
    Button
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
