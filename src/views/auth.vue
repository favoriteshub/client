<template>
	<div :class="[`auth`, location]">
		<div>
			<vForm
				@submit="authenticate"
				:submitButtonText="location === `login` ? `log in` : `sign up`"
				:fields="jsonForm"
				:callBack="dataHandler"
			/>
			<p v-if="location === `login`">Don't have an account yet? <router-link to="/register">Sign up</router-link></p>
		</div>
	</div>
</template>

<script>
import vForm from "@/components/form";
import loginForm from "@/config/form/login.json";
import registerForm from "@/config/form/register.json";

export default {
	name: "auth",
	components: {
		vForm
	},
	props: {
		location: {
			type: String,
			required: true
		}
	},
	data: function() {
		return {
			credentials: {}
		};
	},
	computed: {
		jsonForm: function() {
			return this.location === "login" ? loginForm : registerForm;
		}
	},
	methods: {
		authenticate: function() {
			const actionName = this.location === "login" ? "auth/login" : "auth/register";

			this.$store.dispatch(actionName, this.credentials);
		},
		dataHandler: function(key, val) {
			this.credentials[key] = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.auth {
	@include viewport();
	@extend %flex-center;

	&.login {
		background: linear-gradient(rgba(cyan, 0.5), rgba(white, 0.5)), url("../assets/img/bb.jpg") center/cover no-repeat;
	}

	&.register {
		background: linear-gradient(rgba(#738383, 0.5), rgba(white, 0.5)),
			url("../assets/img/vikings.jpg") center/cover no-repeat;
	}

	div {
		width: 75%;
		background-color: rgba(#fff, 0.75);
		padding: 5%;
		border-radius: 20px;

		@include media("m") {
			width: 66.666%;
		}

		p {
			margin-top: 20px;

			a {
				color: #fff;

				&:hover {
					color: cyan;
				}
			}
		}
	}
}
</style>
