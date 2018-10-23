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
