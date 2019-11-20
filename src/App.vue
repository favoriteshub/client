<template>
	<div id="app">
		<vHeaderContainer />

		<main><router-view /></main>

		<vPopup />
		<vLoader />
	</div>
</template>

<script>
import vHeaderContainer from "@/containers/header";
import vPopup from "@/components/popup";
import vLoader from "@/components/loader";

export default {
	name: "app",
	components: {
		vHeaderContainer,
		vPopup,
		vLoader
	}
};
</script>

<style src="@/style/index.scss" lang="scss"></style>
