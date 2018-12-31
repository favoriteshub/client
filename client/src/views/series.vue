<template>
<div class="series">
	<p>{{$route.params.seriesId}}</p>
</div>
</template>

<script>
export default {
	name: "series",
	beforeRouteEnter(to, from, next) {
		next();
	}
};
</script>

<style lang="scss" scoped>
.series {
	@include viewport-100();
	@include flex-center();
}
</style>
