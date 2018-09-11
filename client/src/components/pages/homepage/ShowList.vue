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
import Show from "@/components/pages/homepage/Show";
import {mapState} from "vuex";

export default {
  components: {
    Show
  },
  computed: mapState({
    shows: (state) => state.shows.showsList
  }),
  created() {
    this.$store.dispatch("shows/getShows");
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
