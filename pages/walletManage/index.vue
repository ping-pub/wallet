<template>
<gracePage  headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-center grace-body">
			<text class="grace-flex-vcenter">
				<text class="grace-icons icon-arrow-left" style="font-size: 16px;"></text>
			</text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white">Wallet</text>
			<text class="look-app-icon look-app-icon-switch" style="width: 80rpx;"></text>
		</view>
		<view slot="gBody" class="grace-body">
			<view class="">
				<text class="look-title"></text>
			</view>
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
