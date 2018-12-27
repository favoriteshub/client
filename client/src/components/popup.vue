<template>
<div v-show="visible" class="v-popup">
	<div class="overlay" @click="closePopup"></div>
	<div class="content">
		<component :is="component.name" v-bind="component.props" />
		<i @click="closePopup" />
	</div>
</div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
	name: "v-popup",
	computed: mapState({
		visible: (state) => state.popup.visible,
		component: (state) => state.popup.component
	}),
	methods: {
		closePopup: function() {
			this.$store.commit("popup/close");
		}
	}
};
</script>

<style lang="scss" scoped>
.v-popup {
	.overlay {
		position: fixed;
	}

	.content {
		@include flex-center();
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;

		@include media("m") {
			top: 50%;
			left: 50%;
			width: 75%;
			height: 75%;
			transform: translate(-50%, -50%);
		}

		i {
			@include icon($icon-close);
			position: absolute;
			top: 0;
			right: 0;
			font-size: 2.4rem;
			background-color: $color-grey-light;
			padding: 15px;
			border-bottom-left-radius: 3px;

			@include media("m") {
				display: none;
			}
		}
	}
}
</style>
