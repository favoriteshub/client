<template>
	<div class="v-select">
		<label :class="{required}">{{ label }}</label>
		<div>
			<input
				type="text"
				:readonly="true"
				placeholder="Select an option"
				:value="value"
				:required="required"
				:disabled="disabled"
				@click="handleClick"
				@blur="handleBlur"
			/>

			<i :class="{open: isListVisible}" />

			<transition name="ul-animation">
				<ul v-if="isListVisible">
					<li v-for="el in options" :key="el" @mousedown="handleItemClick">{{ el }}</li>
				</ul>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: "v-select",
	props: {
		label: String,
		required: Boolean,
		disabled: Boolean,
		options: {
			type: Array,
			required: true
		}
	},
	data: function() {
		return {
			isListVisible: false,
			value: ""
		};
	},
	methods: {
		handleClick: function() {
			this.$data.isListVisible = !this.$data.isListVisible;
		},
		handleBlur: function() {
			if (this.$data.isListVisible) {
				this.$data.isListVisible = false;
			}
		},
		handleItemClick: function(e) {
			this.$data.value = e.target.innerHTML;

			this.$emit("change", e.target.innerHTML);
		}
	}
};
</script>

<style lang="scss" scoped>
.v-select {
	width: 100%;
	margin-bottom: 20px;

	label {
		display: block;
		margin-bottom: 3px;
		font-size: 1.4rem;
		color: rgba(#000000, 0.6);
	}

	.ul-animation {
		&-enter-active,
		&-leave-active {
			transition: 0.5s all ease;
		}

		&-enter,
		&-leave-to {
			transform: translateY(-5px);
			opacity: 0;
		}
	}

	div {
		position: relative;

		input {
			@extend %input;
			cursor: pointer;
		}

		i {
			@include icon($icon-angle-down);
			position: absolute;
			top: 50%;
			right: 10px;
			transform: translateY(-50%);
			pointer-events: none;
			transition: 0.5s all ease;

			&.open {
				transform: rotate(180deg) translateY(50%);
				transition: 0.5s all ease;
			}
		}

		ul {
			position: absolute;
			top: calc(100% + 5px);
			left: 0;
			width: 100%;
			border: 1px solid rgba(#000, 0.12);
			border-radius: 3px;

			li {
				padding: 10px;
				background-color: #fff;
				cursor: pointer;

				&:hover {
					background-color: $color-grey-light;
				}
			}
		}
	}
}
</style>
