<template>
	<header>
		<i :class="[{close: menuVisibility}, 'menu']" @click="trigger" />
		<Menu :visible="menuVisibility" :itemClick="trigger" />
	</header>
</template>

<script>
import Menu from "@/components/basic/header/utils/Menu";

export default {
  components: {
    Menu
  },
  data: function() {
    return {
      menuVisibility: false
    };
  },
  methods: {
    trigger: function() {
      this.menuVisibility = !this.menuVisibility;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $color-grey-main;
  display: flex;
  align-items: center;
	z-index: 100;

  .menu {
    @include icon($icon-menu-open);
    padding-left: 2.5%;
    font-size: 2rem;

    &.close:after {
      content: $icon-menu-close;
    }
  }
}
</style>
