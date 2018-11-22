<template>
  <div class="showcase">
    <Show
      v-for="(show, index) in shows"
      :key="index"
      :show="show">
    </Show>
  </div>
</template>

<script>
import Show from "@/views/homepage/Show";
import {mapState} from "vuex";

export default {
	components: {
		Show
	},
	computed: mapState({
		shows: (state) => state.user.shows
	}),
	created() {
		this.$store.dispatch("user/getShows");
	}
};
</script>

<style lang="scss" scoped>
.showcase {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px 0;
	overflow: auto;
}
</style>
