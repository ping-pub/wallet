<template>
	<view class="grace-empty">
		<slot name="img"></slot>
		<slot name="text"></slot>
	</view>
</template>
<script>
</script>
<style scoped>
.grace-empty{display:flex; flex-direction:column; justify-content:center; align-items:center;}
</style>