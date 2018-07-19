<template>
<div class="wrapper__popup">
  <div @click="trigger">
    <slot name="trigger"></slot>
  </div>
  <div v-if="open" class="popup">
    <div class="overlay" @click="trigger"></div>
    <div class="popup__content">
      <slot name="content" :closePopup="trigger"></slot>
    </div>
    <i class="popup--close" @click="trigger" />
  </div>
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
    blur: Function
  },
  data: function() {
    return {
      open: false
    };
  },
  methods: {
    trigger: function() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  @include flex-center();
  @include absolute-100();

  .overlay {
    @include absolute-100();
    background-color: $color-overlay;
    display: none;

    @include media($breakpoint-medium) {
      display: block;
    }
  }

  &--close {
    @include icon($icon-close);
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    font-size: 2.4rem;

    &:hover {
      background-color: $color-secondary;
    }

    @include media($breakpoint-medium) {
      display: none;
    }
  }

  &__content {
    @include flex-center();
    width: 100%;
    height: 100%;
    background-color: #fff;

    @include media($breakpoint-medium) {
      width: 75%;
      height: 75%;
      z-index: 100;
    }
  }
}
</style>
