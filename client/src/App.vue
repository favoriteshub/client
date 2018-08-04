<template>
  <div id="app">
    <cHeader />
    <main>
      <router-view/>
    </main>
    <GlobalPopup/>
    <Loader/>
  </div>
</template>

<script>
import cHeader from "@/components/utils/header/Header";
import GlobalPopup from "@/components/utils/globalPopup/GlobalPopup";
import Loader from "@/components/utils/loader/Loader";

export default {
  name: "App",
  components: {
    cHeader,
    GlobalPopup,
    Loader
  }
};
</script>

<style src="@/scss/index.scss" lang="scss">
</style>
