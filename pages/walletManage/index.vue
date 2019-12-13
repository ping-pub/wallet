<template>
<gracePage  headerBG="#fff">
		<view slot="gHeader" class="grace-flex-center grace-body">
			<text class="grace-flex-vcenter">
				<text class="grace-icons icon-arrow-left" style="font-size: 16px;"></text>
			    <text>Back</text>
			</text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white">Manage Wallet</text>
			<text class="look-app-icon look-app-icon-switch"></text>
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
