<template>
	<gracePage headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-vcenter grace-space-between">
			<text @tap="goBack" style="padding: 0 24upx;width: 200upx;" class="grace-black6 grace-icons icon-arrow-left"></text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-black">Receive</text>
			<text @tap="go('/pages/walletTransfer/index')" style="padding: 0 24upx;width: 200upx;text-align: right;font-size: 26px;"
			 class="grace-black6 look-app-icon look-app-icon-transfer"></text>
		</view>

		<view slot="gBody" class="grace-body">
			<view class="look-gtbg-dark grace-border mb-12  grace-border-radius-small grace-box-shadow" style="padding: 60rpx 48rpx;margin-top: 24rpx;">
				<view class="mb-12">
					<view class="grace-white mb-12 tc">
						<text style="font-size: 22px;">NAME</text>
					</view>
					<view class="grace-white tc ">
						<text class="f-16 grace-text" style="width: 100%;display: block;overflow-wrap: break-word;">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</text>
					</view>
				</view>
				<view style="padding: 24rpx;background: #fff;margin-top: 60rpx;">
					<image style="width: 100%;" src="https://mubu.com/qrcode/service?data=https://mubu.com/doc/6a87FSKhV1k&size=200"
					 mode=""></image>
				</view>
			</view>

			<view class="grace-border tc grace-black6" style="padding: 12rpx 0;">
				Copy
			</view>
		</view>


	</gracePage>
</template>

<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack()
			},
			go(path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>
