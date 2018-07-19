<template>
<div :class="importance === undefined ? `notification-box` : `notification-box ${importance}`">
  <span>{{text}}</span>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    importance: {
      type: String,
      validator: (value) => {
        return ["primary", "secondary"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style lang="scss">
.notification-box {
  @include flex-center();
  border: 2px solid #e5e5e5;
  border-radius: 3px;
  height: 50px;
  width: 100%;

  &.primary {
    border-color: $color-primary;
  }

  &.secondary {
    border-color: $color-secondary;
  }
}
</style>
