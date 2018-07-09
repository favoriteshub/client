<template>
  <div v-show="visible" class="overlay">
    <div class="content">
      <component :is="component.name" v-bind="component.props" />
    </div>
    <button type="button" v-on:click="closePopup">close</button>
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
      this.$store.commit("globalPopup/setVisibility", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-overlay;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .content {
    width: 75%;
    height: 75%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
