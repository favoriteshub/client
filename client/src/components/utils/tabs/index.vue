<template>
  <div>
    <div class="tabs__selector">
      <p v-for="(el, index) in list" :key="index">{{el}}</p>
    </div>

    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  &__selector {
    display: flex;

    p {
      padding: 10px;
      border: 1px solid #000;
      border-bottom: 0;
      border-top-left-radius: 3px;
    }
  }

  &__content {
    width: 100%;
    padding: 10px;
    border: 1px solid #000;
  }
}
</style>
