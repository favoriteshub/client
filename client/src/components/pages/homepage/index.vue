<template>
  <div class="homepage">
    <div class="homepage__library">
      <Tabs :list="[`Shows`]">
		    <ShowList />
      </Tabs>
    </div>

    <div class="homepage__options">
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/utils/tabs";
import ShowList from "@/components/pages/homepage/ShowList";

export default {
  components: {
    Tabs,
    ShowList
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
