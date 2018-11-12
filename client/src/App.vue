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
import cHeader from "@/components/utils/header";
import Popup from "@/components/utils/popup";
import Loader from "@/components/utils/loader";

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
