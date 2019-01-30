<template>
<div class="welcome">
	<p>Welcome</p>
</div>
</template>

<script>
export default {
	name: "welcome"
};
</script>

<style lang="scss" scoped>
.welcome {
	@include viewport();
	@extend %flex-center;
}
</style>
