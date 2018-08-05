<template>
<header v-if="authenticated">
</header>

<header v-else>
	<router-link to="/guest" class="home"></router-link>
	<div class="to-raftel">
		<router-link to="/login">Log in</router-link>
		<router-link to="/register">Register</router-link>
	</div>
</header>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: mapState({
    authenticated: (state) => state.auth.authenticated
  })
};
</script>

<style lang="scss" scoped>
header {
  height: 40px;
  width: 100%;
  background-color: $color-grey-main;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5%;
  font-size: 2rem;

  .home {
    @include icon($icon-home);
  }

  .to-raftel {
    a {
      font-style: italic;

      &:hover {
        color: cyan;
      }

      &:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
