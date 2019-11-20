<template>
	<div id="app">
		<vHeaderContainer />

		<main><router-view /></main>

		<vPopup />
		<vLoaderContainer />
	</div>
</template>

<script>
import vHeaderContainer from "@/containers/header";
import vPopup from "@/components/popup";
import vLoaderContainer from "@/containers/loader";

export default {
	name: "app",
	components: {
		vHeaderContainer,
		vPopup,
		vLoaderContainer
	}
};
</script>

<style src="@/style/index.scss" lang="scss"></style>
