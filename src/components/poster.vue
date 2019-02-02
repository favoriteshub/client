<template>
	<div class="v-poster">
		<img :src="data[`poster`]" :alt="`${data.title} `" @click="onClick" />
	</div>
</template>

<script>
export default {
	name: "v-poster",
	props: {
		data: {
			type: Object,
			required: true
		},
		onClick: {
			type: Function,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.v-poster {
	img {
		display: block;
		width: 100%;
		cursor: pointer;

		&:hover {
			opacity: 0.75;
			box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.75);
		}
	}
}
</style>
