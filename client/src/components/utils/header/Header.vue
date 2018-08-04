<template>
<header>
	<router-link to="/settings" class="gear"></router-link>
</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 40px;
  width: 100%;
  background-color: $color-grey-main;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .gear {
    @include icon($icon-gear);
    margin-right: 2.5%;
  }
}
</style>
