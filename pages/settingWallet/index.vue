<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Manage Wallet">
			<text style="padding: 12rpx 24rpx;" class="grace-black6 look-app-icon look-app-icon-save"></text>
		</PageTitle>
		<view slot="gBody" class="grace-body">
			<!-- 待定 -->
		</view>
	</gracePage>
</template>
<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack()
			},
		}
	}
</script>
