<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input :type="type" :name="name" :required="required" :disabled="disabled" @blur="blur"/>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: String,
    label: String,
    disabled: Boolean,
    required: Boolean,
    blur: Function
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 3px;
    font-size: 1.4rem;
    color: rgba(#000000, 0.6);
  }

  input {
    @include input();
  }
}
</style>
