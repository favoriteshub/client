<template>
	<section class="episodes">
		<h2>Episodes</h2>

		<article v-for="el in seasons" :key="el.season" :class="{ open: openArticle === el.season }">
			<div class="header" @click="() => handleOpenArticle(el.season)">
				<i />
				<i />
				<h4>Season {{ el.season }}</h4>
			</div>

			<div class="list">
				<div
					v-for="episode in el.episodes"
					:key="episode.title"
					@click="() => handleOpenEpisode(episode.title)"
					:class="{ open: openEpisode === episode.title }"
				>
					<div><i /></div>
					<span>{{ episode.episode }}</span>
					<p>{{ episode.title }}</p>
					<span>{{ formatDate(episode.aired) }}</span>
					<p>{{ episode.summary }}</p>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
import moment from "moment";
import { debounce } from "lodash";

export default {
	name: "episodes",
	props: {
		seasons: Array
	},
	data: function() {
		return {
			openArticle: undefined,
			openEpisode: undefined
		};
	},
	watch: {
		seasons: function() {
			this.debouncedUpdateOpenArticle();
		}
	},
	created: function() {
		this.debouncedUpdateOpenArticle = debounce(this.updateOpenArticle, 500);
	},
	methods: {
		formatDate: function(date) {
			return moment(date).format(`ll`);
		},
		handleOpenArticle: function(num) {
			this.openArticle = this.openArticle === num ? undefined : num;
		},
		handleOpenEpisode: function(title) {
			this.openEpisode = this.openEpisode === title ? undefined : title;
		},
		updateOpenArticle: function() {
			this.openArticle = this.seasons.length;
		}
	}
};
</script>

<style lang="scss" scoped>
.episodes {
	h2 {
		margin-bottom: 10px;
		color: $color-grey-dark;
	}

	article {
		margin-bottom: 5px;
		cursor: pointer;

		.header {
			margin-bottom: 5px;
			padding: 10px;
			background-color: #36688d;
			color: #fff;
			display: flex;
			align-items: center;

			i {
				@include icon($icon-angle-down);
				transform: rotate(-90deg);
				font-size: 2.2rem;
				transition: all 0.5s ease;
			}

			h4 {
				margin-left: 10px;
			}
		}

		.list {
			max-height: 0;
			overflow: hidden;
			transition: all 0.5s ease;

			> div {
				display: grid;
				grid-template-columns: 15px 30px 3fr 1fr;
				align-items: center;
				margin-bottom: 2px;
				padding: 10px;
				background-color: #f18904;
				color: #fff;

				i {
					@include icon($icon-angle-down);
					transform: rotate(-90deg);
					transition: all 0.25s ease;
				}

				&:nth-child(odd) {
					background-color: #f49f05;
				}

				&:last-child {
					margin: 0;
				}

				span {
					&:last-of-type {
						justify-self: end;
					}
				}

				p {
					&:last-of-type {
						max-height: 0;
						overflow: hidden;
						transition: all 0.25s ease;
						grid-column: 3 / 4;
						text-align: justify;
					}
				}

				&.open {
					i {
						transform: rotate(0);
						transition: all 0.25s ease;
					}

					p {
						&:last-of-type {
							max-height: 250px;
							transition: all 0.25s ease;
							margin-top: 5px;
							padding-top: 5px;
							border-top: 1px solid #fff;
						}
					}
				}
			}
		}

		&.open {
			.header {
				i {
					transform: rotate(0);
					transition: all 0.5s ease;
				}
			}

			.list {
				max-height: 2000px;
				transition: all 0.5s ease;
			}
		}
	}
}
</style>
