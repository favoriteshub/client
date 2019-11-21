<template>
	<vLoader :isVisible="visible" />
</template>

<script>
import vLoader from "@/components/loader";
import { mapState } from "vuex";

export default {
	name: "v-loader-container",
	components: {
		vLoader
	},
	computed: mapState({
		visible: (state) => state.loader.visible
	})
};
</script>
