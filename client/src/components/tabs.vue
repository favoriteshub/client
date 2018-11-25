<template>
	<div>
		<div class="tabs__selector">
			<p
				v-for="(el, index) in list"
				:key="index"
				@click="handleTabCLick(index);"
				:class="{selected: el === selectedTab}"
			>
				{{el}}
			</p>
		</div>

		<div class="tabs__content"><slot v-for="el in list" :name="el" v-if="el === selectedTab" /></div>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			required: true
		}
	},
	data: function() {
		return {
			selectedTab: this.list[0]
		};
	},
	methods: {
		handleTabCLick: function(index) {
			this.$data.selectedTab = this.list[index];
		}
	}
};
</script>

<style lang="scss" scoped>
.tabs {
	&__selector {
		display: flex;
		margin-bottom: -1px;

		p {
			cursor: pointer;
			padding: 10px 15px;
			border: 1px solid $color-grey-normal;
			border-right: none;
			border-radius: 5px 5px 0 0;
			background-color: $color-grey-light;
			transition: all 0.5s ease;

			&:last-child {
				border-right: 1px solid $color-grey-normal;
			}

			&:hover {
				background-color: #fff;
			}

			&.selected {
				cursor: default;
				background-color: #fff;
				border-bottom: 1px solid #fff;
			}
		}
	}

	&__content {
		width: 100%;
		padding: 10px;
		border: 1px solid $color-grey-normal;
		border-radius: 0 5px 5px 5px;
	}
}
</style>
