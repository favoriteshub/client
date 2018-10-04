<template>
	<div class="login">
		<div class="login__form">
      <cForm :submit="register" submitButtonText="log in" :fields="{list: $options.jsonForm, onBlur: inputBlurHandler}" />
		</div>
	</div>
</template>

<script>
import cForm from "@/components/utils/form";
import jsonForm from "@/configuration/form/register.json";

export default {
  jsonForm: jsonForm,
  components: {
    cForm
  },
  methods: {
    register: function(e) {
      e.preventDefault();

      this.$store.dispatch("auth/register", this._data);
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
  background: linear-gradient(rgba(#738383, 0.5), rgba(white, 0.5)),
    url("../../../static/img/vikings.jpg") center/cover no-repeat;

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
