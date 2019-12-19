<template>
	<gracePage headerBG="#fff">
		<view class="grace-bg-white" slot="gHeader">
			<view class="status_bar"></view>
			<view class="grace-flex-center" style="padding: 32rpx 24rpx 12rpx 24rpx;">
				<text class="look-title">Ping</text>
				<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white"></text>
				<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
					<text style="margin-right: 12rpx;">CosmosHub-3</text>
					<text class="look-app-icon look-app-icon-switch"></text>
				</view>
			</view>
		</view>

		<view slot="gBody">
			<view class="grace-body" style="padding-top: 48rpx;padding-bottom: 12rpx;">
				<view class="grace-box-shadow look-gtbg-light grace-border-radius-small">

					<view class="grace-space-between" style="align-items: center;padding: 60rpx 24rpx 48rpx 24rpx">
						<view class="">
							<view class=""><text class="grace-black9">Assets</text></view>
							<view class=""><text style="font-size: 22px;color: #37434b;">$8212,992,134,199</text></view>
						</view>
						<view class="">
							<image style="width: 140upx;height: 140upx;" src="../../static/wallet/asset1.png" mode=""></image>
						</view>
					</view>

				</view>
			</view>
			<view class="grace-bg-white grace-space-between grace-flex-vbottom" style="padding: 24rpx;">
				<text class="look-title-sm">Wallets</text>
				<text class="grace-black6" @click="go('/pages/walletManage/index')">
					<text class="grace-icons icon-add2 mr-6 f-16"></text>
				</text>
			</view>
			<!-- <view class="page-space"></view> -->

			<view class="" v-for="n in 10" :key="n">
				<view @tap="go('/pages/walletItem/index')" class="grace-flex grace-flex-vcenter grace-bg-white grace-box-shadow grace-border-radius-small" style="padding: 32rpx 32rpx;margin: 0 24rpx 24rpx 24rpx;">
					<image class="mr-12" style="width: 60rpx;height: 60rpx;" src="../../static/wallet/cosmoshub.svg"></image>
					<text class="flex-1 f-16">NAME</text>
					<view class="tr">
						<view class="f-18 grace-black">
							$12,992,134,199
						</view>
						<view class="grace-black9">
							cosmos1zu83m37u...ktq2l6lqjtzw
						</view>
					</view>
				</view>
				<!-- <view class="page-space"></view> -->
			</view>
			<SwtichChain :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js'
	import SwtichChain from '../../components/SwitchChain.vue'

	export default {
		components: {
			SwtichChain
		},
		mixins: [SwitchWalletMixin],
		methods: {
			go(path) {
				uni.navigateTo({
					url: path
				});
			},
			goSwitch(path) {
				uni.switchTab({
					url: path
				});
			},
		}
	};
</script>
