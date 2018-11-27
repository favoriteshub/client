<template>
	<div :class="`auth auth--${location}`">
		<div class="auth__form">
			<cForm
				:submit="authenticate"
				:submitButtonText="location === `login` ? `log in` : `sign up`"
				:fields="jsonForm"
				:callBack="dataHandler"
			/>
			<p v-if="location === `login`">Don't have an account yet? <router-link to="/register">Sign up</router-link></p>
		</div>
	</div>
</template>

<script>
import cForm from "@/components/form";
import loginForm from "@/config/form/login.json";
import registerForm from "@/config/form/register.json";

export default {
	components: {
		cForm
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
		authenticate: function(e) {
			e.preventDefault();

			this.$store.dispatch(`auth/${this.location}`, this.credentials);
		},
		dataHandler: function(key, val) {
			this.credentials[key] = val;
		}
	}
};
</script>

<style lang="scss" scoped>
.auth {
	@include viewport-100();
	@include flex-center();

	&--login {
		background: linear-gradient(rgba(cyan, 0.5), rgba(white, 0.5)), url("../assets/img/bb.jpg") center/cover no-repeat;
	}

	&--register {
		background: linear-gradient(rgba(#738383, 0.5), rgba(white, 0.5)),
			url("../assets/img/vikings.jpg") center/cover no-repeat;
	}

	&__form {
		width: 75%;
		background-color: rgba(#fff, 0.75);
		padding: 5%;
		border-radius: 20px;

		@include media($breakpoint-medium) {
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
