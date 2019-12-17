<template>
	<gracePage :customHeader="false">
		<view slot="gBody">
			<view class="look-gtbg-dark">
				<view class="status_bar"></view>
				<view class="grace-flex-center" style="padding: 24rpx;padding-top: 32rpx;">
					<text class="grace-white look-title">Ping</text>
					<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white"></text>
					<view @tap="switchWallet" class="grace-white grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
						<text style="margin-right: 12rpx;">CosmosHub-3</text>
						<text class="look-app-icon look-app-icon-switch"></text>
					</view>
				</view>
				<view class="grace-space-between" style="align-items: center;padding: 60rpx 24rpx 48rpx 24rpx">
					<view class="">
						<view class=""><text class="grace-gray">Assets</text></view>
						<view class=""><text class="grace-white" style="font-size: 24px;font-weight: bold;">$12,992,134,199</text></view>
					</view>
					<view class="">
						<image style="width: 140upx;height: 140upx;" src="../../static/wallet/asset1.png" mode=""></image>
					</view>
				</view>
				<view class="grace-bg-white grace-space-between grace-flex-vbottom mb-12" style="border-radius: 32rpx 32rpx 0 0;padding: 24rpx 24rpx 0 24rpx;">
					<text class="look-title-sm">Wallets</text>
					<text class="grace-black6" @click="go('/pages/walletManage/index')">
						<text class="look-app-icon look-app-icon-manage mr-6 f-16"></text>
						<text>Manage</text>
					</text>
				</view>
			</view>
			
			<view class="" v-for="n in 10" :key="n">
				<view class="page-space"></view>
				<view @tap="go('/pages/walletItem/index')"  class="grace-flex grace-flex-vcenter" style="padding: 32rpx 32rpx">
					<image class="mr-12" style="width: 60rpx;height: 60rpx;" src="../../static/wallet/cosmoshub.svg"></image>
					<text class="flex-1 f-16">NAME</text>
					<view class="tr">
						<view class="f-18">
							$12,992,134,199
						</view>
						<view class="grace-black9">
							cosmos1zu83m37u...ktq2l6lqjtzw
						</view>
					</view>
				</view>
			</view>
<view class="page-space"></view>
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js'

	export default {
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
