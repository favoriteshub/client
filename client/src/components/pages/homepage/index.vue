<template>
	<div class="homepage">
		<ShowList />
		<div class="news">
		</div>
		<div class="add-news">
		</div>
		<cButton text="add new show" importance="primary" :action="openAddShowPopup" />
	</div>
</template>

<script>
import ShowList from "@/components/pages/homepage/ShowList";
import AddShow from "@/components/pages/homepage/AddShow";
import cButton from "@/components/utils/button";

export default {
  components: {
    ShowList,
    AddShow,
    cButton
  },
  methods: {
    openAddShowPopup: function() {
      this.$store.commit("popup/open", {
        name: AddShow,
        props: {sumbitAction: this.closeAddShowPopup}
      });
    },
    closeAddShowPopup: function() {
      this.$store.commit("popup/close");
    }
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "showcase showcase news"
    "showcase showcase add_news"
    "showcase showcase add_show";
  grid-column-gap: 10px;

  .showcase {
    grid-area: showcase;
  }

  .news {
    grid-area: news;
    width: 200px;
    height: 100px;
    background-color: lightgrey;
  }

  .add-news {
    grid-area: add_news;
    width: 200px;
    height: 100px;
    background-color: grey;
  }

  button {
    grid-area: add_show;
  }
}
</style>
