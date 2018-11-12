<template>
  <div class="filmcase">
    <Film
      v-for="(film, index) in films"
      :key="index"
      :film="film">
    </Film>
  </div>
</template>

<script>
import Film from "@/components/pages/homepage/Film";
import {mapState} from "vuex";

export default {
	components: {
		Film
	},
	computed: mapState({
		films: (state) => state.user.films
	}),
	created() {
		this.$store.dispatch("user/getFilms");
	}
};
</script>

<style lang="scss" scoped>
.filmcase {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px 0;
	overflow: auto;
}
</style>
