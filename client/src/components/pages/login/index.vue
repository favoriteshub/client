<template>
	<div class="login">
		<div class="login__form">
			<cForm :submit="login" submitButtonText="log in" :fields="$options.jsonForm" :callBack="dataHandler" />
			<p>Don't have an account yet? <router-link to="/register">Sign up</router-link></p>
		</div>
	</div>
</template>

<script>
import cForm from "@/components/utils/form";
import jsonForm from "@/configuration/form/login.json";

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
    login: function(e) {
      e.preventDefault();

      this.$store.dispatch("auth/login", this.credentials);
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
  background: linear-gradient(rgba(cyan, 0.5), rgba(white, 0.5)),
    url("../../../static/img/bb.jpg") center/cover no-repeat;

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
