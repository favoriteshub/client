<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
    <GlobalPopup/>
  </div>
</template>

<script>
import Header from "@/components/basic/header/Header";
import GlobalPopup from "@/components/utils/globalPopup/GlobalPopup";

export default {
  name: "App",
  components: {
    Header,
    GlobalPopup
  }
};
</script>

<style src="./assets/scss/index.scss" lang="scss">
</style>
