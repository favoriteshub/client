<template>
	<div class="film">
		<div class="film__poster">
			<img :src="film.poster" width="170" height="250" :alt="`${film.title} poster`" @click="deleteFilm" />
			<i class="film--edit" @click="editFilm" />
		</div>
		<div class="film__information">
			<label>Title</label>
			<p>{{ film.title }}</p>
		</div>
	</div>
</template>

<script>
import moment from "moment";

export default {
	props: {
		film: {
			type: Object,
			required: true
		}
	},
	data: function() {
		return {
			deleteCounter: {
				times: 0,
				time: null
			}
		};
	},
	methods: {
		deleteFilm: function() {
			let now = moment();
			if (now.diff(this.deleteCounter.time) <= 500 || this.deleteCounter.time === null) {
				if (this.deleteCounter.times === 2) {
					this.$store.dispatch("films/deletefilm", this.film._id);
					this.resetDeleteCounter();
				} else {
					this.deleteCounter = {times: this.deleteCounter.times + 1, time: now};
				}
			} else {
				this.resetDeleteCounter();
			}
		},
		resetDeleteCounter: function() {
			this.deleteCounter = {times: 0, time: null};
		},
		editFilm: function() {
			console.log(this.film.title);
		}
	}
};
</script>

<style lang="scss" scoped>
.film {
	display: flex;

	&__poster {
		position: relative;
	}

	&--edit {
		@include icon($icon-edit);
		position: absolute;
		top: 5px;
		left: 5px;
		font-size: 2.4rem;
		padding: 5px;
		background-color: white;
		border-radius: 3px;
		opacity: 0;
		transition: all 0.75s ease;

		&:hover {
			opacity: 1;
			transition: all 0.75s ease;
		}
	}

	&__information {
		margin-left: 10px;

		label {
			text-decoration: underline;
		}

		p {
			margin: 5px 0 10px 0;
		}
	}
}
</style>
