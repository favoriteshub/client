<template>
	<vPopup :isVisible="visible" :component="component" :extraClasses="extraClasses" @outsideClick="closePopup" />
</template>

<script>
import vPopup from "@/components/popup";
import { mapState } from "vuex";

export default {
	name: "v-popup",
	components: {
		vPopup
	},
	computed: mapState({
		visible: (state) => state.popup.visible,
		component: (state) => state.popup.component,
		extraClasses: (state) => state.popup.extraClasses
	}),
	methods: {
		closePopup: function() {
			this.$store.commit("popup/close");
		}
	}
};
</script>
