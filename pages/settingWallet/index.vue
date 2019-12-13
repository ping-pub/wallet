<template>
	<gracePage headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-center">
			<text @tap="goBack" style="padding: 0 24upx;width: 200upx;align-self: flex-end;" class="grace-black6 grace-icons icon-arrow-left"></text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-black">Manage Wallet</text>
			<text style="padding: 0 24upx;width: 200upx;text-align: right;align-self: flex-end;" class="grace-black6 look-app-icon look-app-icon-save"></text>
		</view>
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
