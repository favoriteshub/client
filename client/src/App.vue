<template>
  <div id="app">
    <cHeader />
    <main>
      <router-view />
    </main>
    <Popup />
    <Loader />
  </div>
</template>

<script>
import cHeader from "@/components/utils/header/Header";
import Popup from "@/components/utils/popup/Popup";
import Loader from "@/components/utils/loader/Loader";

export default {
  name: "App",
  components: {
    cHeader,
    Popup,
    Loader
  }
};
</script>

<style src="@/scss/index.scss" lang="scss">
</style>
