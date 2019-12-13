<template>
	<gracePage headerBG="#fff">
		<view slot="gHeader" class="grace-flex-vcenter grace-space-between">
			<text @tap="goBack" style="padding: 0 24upx;width: 200upx;" class="grace-black6 grace-icons icon-arrow-left"></text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-black">Transfer</text>
			<text @tap="go('/pages/walletTransfer/index')" style="padding: 0 24upx;width: 200upx;text-align: right;"></text>
		</view>

		<view slot="gBody" class="grace-body">
			<form class="grace-form">
				<!-- 项目 -->
				<view class="grace-items">
					<view class="grace-label">Cosmos</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
				<view class="grace-items">
					<view class="grace-label">Kava</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
				<view class="grace-items">
					<view class="grace-label">Iris</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
			</form>
			<view class="tc grace-black6 look-gtbg-dark" style="padding: 12rpx 0;">
				Verify
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
