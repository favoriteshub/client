<template>
	<div class="login">
		<div class="login__form">
			<cForm :submit="login" submitButtonText="log in">
			  <cInput label="Username" name="username" :blur="inputBlurHandler" />
			  <cInput label="Password" name="password" type="password" :blur="inputBlurHandler" />
			</cForm>
			<p>Don't have an account yet? <router-link to="/register">Sign up</router-link></p>
		</div>
	</div>
</template>

<script>
import cForm from "@/components/utils/form";
import cInput from "@/components/utils/input";

export default {
  components: {
    cForm,
    cInput
  },
  methods: {
    login: function(e) {
      e.preventDefault();

      this.$store.dispatch("auth/login", this._data);
    },
    inputBlurHandler: function(e) {
      this._data[e.target.name] = e.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  @include flex-center();
  width: 100%;
  height: calc(100vh - 40px);
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
