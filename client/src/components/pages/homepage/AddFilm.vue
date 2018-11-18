<template>
	<cForm :submit="addFilm" submitButtonText="add" :fields="formFields" :callBack="dataHandler" />
</template>

<script>
import cForm from "@/components/utils/form";
import jsonForm from "@/config/form/addFilm.json";
import jsonCountries from "@/config/countries.json";

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
			film: {}
		};
	},
	computed: {
		formFields: function() {
			return jsonForm.map((elem) => {
				if (elem.type === "select") {
					return {...elem, options: jsonCountries};
				} else {
					return {...elem};
				}
			});
		}
	},
	methods: {
		addFilm: function(e) {
			e.preventDefault();

			this.$store.dispatch("film/addFilm", this.film).then(() => this.$store.commit("popup/close"));
		},
		dataHandler: function(key, val) {
			this.film[key] = val;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
