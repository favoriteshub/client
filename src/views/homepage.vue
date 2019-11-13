<template>
	<div class="homepage">
		<p>Welcome</p>
	</div>
</template>

<script>
export default {
	name: "homepage"
};
</script>

<style lang="scss" scoped>
.homepage {
	@include viewport();
	@extend %flex-center;
}
</style>
