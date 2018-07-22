<template>
<div v-show="visible" class="popup">
  <div class="overlay" @click="closePopup"></div>
  <div class="popup__content">
    <component :is="component.name" v-bind="component.props" />
  </div>
  <i class="popup--close" @click="closePopup" />
</div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import Button from "@/components/utils/button/Button";

export default {
  computed: mapState({
    visible: (state) => state.globalPopup.visible,
    component: (state) => state.globalPopup.component
  }),
  methods: {
    closePopup: function() {
      this.$store.commit("globalPopup/close");
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  @include absolute-100();
  @include flex-center();
  z-index: 100;

  .overlay {
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
    background-color: $color-grey-main;

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
      z-index: 10;
    }
  }
}
</style>
