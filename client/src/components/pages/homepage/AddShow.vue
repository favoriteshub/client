<template>
<cForm :submit="addShow" submitButtonText="add">
  <cInput label="Title" name="title" :blur="inputBlurHandler" />
  <cInput label="Status" name="status" :blur="inputBlurHandler" />
  <cInput label="Last Aired" name="last_aired" :blur="inputBlurHandler" />
  <cInput label="Last Seen" name="last_seen" :blur="inputBlurHandler" />
  <cInput label="Poster" name="poster" :blur="inputBlurHandler" />
</cForm>
</template>

<script>
import cForm from "@/components/utils/form";
import cInput from "@/components/utils/input";

export default {
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
