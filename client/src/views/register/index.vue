<template>
	<div class="login">
		<div class="login__form">
      <cForm :submit="register" submitButtonText="sign up" :fields="$options.jsonForm" :callBack="dataHandler" />
		</div>
	</div>
</template>

<script>
import cForm from "@/components/utils/form";
import jsonForm from "@/config/form/register.json";

export default {
	jsonForm: jsonForm,
	components: {
		cForm
	},
	data: function() {
		return {
			credentials: {}
		};
	},
	methods: {
		register: function(e) {
			e.preventDefault();

			this.$store.dispatch("auth/register", this.credentials);
		},
		dataHandler: function(key, val) {
			this.credentials[key] = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.login {
	@include viewport-100();
	@include flex-center();
	background: linear-gradient(rgba(#738383, 0.5), rgba(white, 0.5)),
		url("../../assets/img/vikings.jpg") center/cover no-repeat;

	&__form {
		width: 75%;
		background-color: rgba(#fff, 0.75);
		padding: 5%;
		border-radius: 20px;

		@include media($breakpoint-medium) {
			width: 66.666%;
		}
	}
}
</style>
