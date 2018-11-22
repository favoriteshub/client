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
import cHeader from "@/components/header";
import Popup from "@/components/popup";
import Loader from "@/components/loader";

export default {
	name: "App",
	components: {
		cHeader,
		Popup,
		Loader
	}
};
</script>

<style src="@/style/index.scss" lang="scss">
</style>
