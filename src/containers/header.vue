<template>
	<vHeader :authenticated="authenticated" @logoutClick="logout" />
</template>

<script>
import vHeader from "@/components/header";
import { mapState } from "vuex";

export default {
	name: "v-header-container",
	components: {
		vHeader
	},
	computed: mapState({
		authenticated: (state) => state.auth.authenticated
	}),
	methods: {
		logout: function() {
			this.$store.commit("auth/logout");
		}
	}
};
</script>
