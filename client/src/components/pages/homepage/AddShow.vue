<template>
	<cForm :submit="addShow" submitButtonText="add" :fields="{list: $options.jsonForm, onBlur: inputBlurHandler}" />
</template>

<script>
import cForm from "@/components/utils/form";
import jsonForm from "@/configuration/form/addShow.json";

export default {
  jsonForm: jsonForm,
  components: {
    cForm
  },
  props: {
    sumbitAction: Function
  },
  data: function() {
    return {
      show: {}
    };
  },
  methods: {
    addShow: function(e) {
      e.preventDefault();

      this.$store.dispatch("shows/addShow", this.show).then(() => this.$store.commit("popup/close"));
    },
    inputBlurHandler: function(e) {
      this.show[e.target.name] = e.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
