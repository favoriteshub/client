<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
    <GlobalPopup/>
    <Loader/>
  </div>
</template>

<script>
import Header from "@/components/basic/header/Header";
import GlobalPopup from "@/components/utils/globalPopup/GlobalPopup";
import Loader from "@/components/utils/loader/Loader";

export default {
  name: "App",
  components: {
    Header,
    GlobalPopup,
    Loader
  }
};
</script>

<style src="./assets/scss/index.scss" lang="scss">
</style>
