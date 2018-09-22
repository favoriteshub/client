<template>
	<div class="login">
		<div class="login__form">
			<cForm :submit="login" submitButtonText="sign up">
        <cInput
          v-for="(field, index) in $options.jsonForm"
          :key="index"
          :label="field.label"
          :name="field.name"
          :type="field.type"
          :disabled="field.disabled"
          :required="field.required"
          :blur="inputBlurHandler"
        />
			</cForm>
		</div>
	</div>
</template>

<script>
import cForm from "@/components/utils/form";
import cInput from "@/components/utils/input";
import jsonForm from "@/configuration/form/register.json";

export default {
  jsonForm: jsonForm,
  components: {
    cForm,
    cInput
  },
  methods: {
    login: function(e) {
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
