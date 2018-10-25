<template>
  <div class="homepage">
    <div class="homepage__library">
      <Tabs :list="[`Shows`]">
		    <ShowList />
      </Tabs>
    </div>

    <div class="homepage__options">
      <div class="homepage__options__search-new">
        <Autocomplete
          text="Search among the existing series or add a new one"
          :list="showsSearch.onlyTitles"
          :error="showsSearch.noData"
          action="shows"
          :onItemClick="handleSearch"
        />
        <cButton importance="primary" :action="openAddShowPopup" />
      </div>
      <span>{{searchedElement}}</span>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/utils/tabs";
import ShowList from "@/components/pages/homepage/ShowList";
import Autocomplete from "@/components/utils/autocomplete";
import cButton from "@/components/utils/button";
import AddShow from "@/components/pages/homepage/AddShow";
import {mapState} from "vuex";

export default {
  components: {
    Tabs,
    ShowList,
    Autocomplete,
    cButton
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
    },
    openAddShowPopup: function() {
      this.$store.commit("popup/open", {name: AddShow});
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

    &__search-new {
      display: flex;
      align-items: center;

      button {
        @include icon($icon-plus, false);
        font-size: 2.4rem;
        width: auto;
        padding: 0 10px;
        margin-left: 5px;
      }
    }
  }
}
</style>
