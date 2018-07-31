<template>
	<div class="login">
		<div class="login__form">
			<cForm :submit="login" submitButtonText="login">
			  <cInput label="Username" name="username" :blur="inputBlurHandler" />
			  <cInput label="Password" name="password" :blur="inputBlurHandler" />
			</cForm>
			<p>Don't have an account yet? <span @click="register">Sign up</span></p>
		</div>
	</div>
</template>

<script>
import cForm from "@/components/utils/form/Form";
import cInput from "@/components/utils/input/Input";

export default {
  components: {
    cForm,
    cInput
  },
  methods: {
    login: function(e) {
      e.preventDefault();

      // TODO:
      debugger;
    },
    register: function() {
      // TODO:
      debugger;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
    url("../../../../static/img/bb.jpg") center no-repeat;
  z-index: 1000;

  &__form {
    width: 50%;
    background-color: rgba(#fff, 0.75);
    padding: 5%;
    border-radius: 20px;

    p {
      margin-top: 20px;

      span {
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
