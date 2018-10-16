<template>
  <div class="homepage">
    <div class="homepage__library">
      <Tabs :list="[`Shows`]">
		    <ShowList />
      </Tabs>
    </div>

    <div class="homepage__options">
      <Autocomplete
        :list="showsSearch.onlyTitles"
        :error="showsSearch.noData"
        action="shows"
        :onItemClick="handleSearch"
      />
      <span>{{searchedElement}}</span>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/utils/tabs";
import ShowList from "@/components/pages/homepage/ShowList";
import Autocomplete from "@/components/utils/autocomplete";
import {mapState} from "vuex";

export default {
  components: {
    Tabs,
    ShowList,
    Autocomplete
  },
  data: function() {
    return {
      searchedElement: ""
    };
  },
  computed: mapState({
    showsSearch: (state) => state.shows.search
  }),
  methods: {
    handleSearch: function(item) {
      this.$data.searchedElement = item.title;
    }
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  @include viewport-100();
  display: flex;

  &__library {
    width: 70%;
    padding: 20px;
  }

  &__options {
    width: 30%;
    padding: 20px;
  }
}
</style>
