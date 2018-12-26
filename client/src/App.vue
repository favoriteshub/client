<template>
<div id="app">
  <vHeader />

  <main><router-view /></main>
  
  <vPopup />
  <vLoader />
</div>
</template>

<script>
import vHeader from "@/components/header";
import vPopup from "@/components/popup";
import vLoader from "@/components/loader";

export default {
	name: "App",
	components: {
		vHeader,
		vPopup,
		vLoader
	}
};
</script>

<style src="@/style/index.scss" lang="scss">
</style>
