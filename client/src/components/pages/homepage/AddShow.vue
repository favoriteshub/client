<template>
<cForm :submit="addShow" submitButtonText="add">
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
</template>

<script>
import cForm from "@/components/utils/form";
import cInput from "@/components/utils/input";
import jsonForm from "@/configuration/form/addShow.json";

export default {
  jsonForm: jsonForm,
  components: {
    cForm,
    cInput
  },
  props: {
    sumbitAction: Function
  },
  methods: {
    addShow: function(e) {
      e.preventDefault();

      let show = {
        title: this._data.title,
        status: this._data.status,
        last_aired: this._data.last_aired,
        last_seen: this._data.last_seen,
        poster: this._data.poster
      };

      this.$store.dispatch("shows/addShow", show);

      if (this.sumbitAction) {
        this.sumbitAction();
      }
    },
    inputBlurHandler: function(e) {
      this._data[e.target.name] = e.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
