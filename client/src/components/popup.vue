<template>
<div v-show="visible" class="v-popup">
	<div class="overlay" @click="closePopup"></div>
	<div :class="[`content`, extraClasses]">
		<component :is="component.name" v-bind="component.props" />
		<div class="close" @click="closePopup" ><i /></div>
	</div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: "v-popup",
	computed: mapState({
		visible: (state) => state.popup.visible,
		component: (state) => state.popup.component,
		extraClasses: (state) => state.popup.extraClasses
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
	.content {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		padding: 40px;

		@include media("m") {
			top: 50%;
			left: 50%;
			width: auto;
			max-width: 75%;
			max-height: 75%;
			transform: translate(-50%, -50%);
		}

		.close {
			@include absolute(40px, 40px);
			left: auto;
			right: 0;
			@extend %flex-center;
			background-color: $color-grey-light;
			border-bottom-left-radius: 3px;

			@include media("m") {
				display: none;
			}

			i {
				@include icon($icon-close);
				font-size: 2.4rem;
			}
		}
	}
}
</style>
