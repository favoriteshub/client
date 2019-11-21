<template>
	<div id="app">
		<vHeaderContainer />

		<main><router-view /></main>

		<vPopupContainer />
		<vLoaderContainer />
	</div>
</template>

<script>
import vHeaderContainer from "@/containers/header";
import vPopupContainer from "@/containers/popup";
import vLoaderContainer from "@/containers/loader";

export default {
	name: "app",
	components: {
		vHeaderContainer,
		vPopupContainer,
		vLoaderContainer
	}
};
</script>

<style src="@/style/index.scss" lang="scss"></style>
