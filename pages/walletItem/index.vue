<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Wallet Detail">
			<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 12rpx 24rpx;font-weight: 500;">
				<text style="margin-right: 12rpx;">Address1</text>
				<text class="look-app-icon look-app-icon-switch"></text>
			</view>
		</PageTitle>
		<view slot="gBody" class="grace-body">
			<view class="look-gtbg-dark grace-box-shadow grace-border mt-12 mb-12  grace-border-radius-small" style="padding: 24upx 24upx;">
				<view class="mb-12">
					<view class="grace-white">
						<view class="grace-ellipsis">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</view>
					</view>
				</view>
				<view class="grace-space-between">
					<view>
						<view class=""><text class="grace-white" style="font-size: 20px;font-weight: bold;">$12,992,134,199</text></view>
					</view>
					<view>
						<image style="width: 100rpx;height: 100rpx;" src="../../static/wallet/asset2.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="grace-flex tc" style="padding-top: 24rpx;">
				<view class="flex-1 grace-black6" @click="scan">
					<view class="mb-6">
						<text class="grace-icons icon-scan grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text>
					</view>
					<view class="grace-grids-text">Scan</view>
				</view>
				<view class="flex-1 grace-black6" @tap="go('/pages/walletQrcode/index')">

					<view class="mb-6">
						<text class="look-app-icon look-app-icon-qrcode grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text>
					</view>
					<view class="grace-grids-text">Recevie</view>
				</view>
				<view class="flex-1 grace-black6" @tap="go('/pages/walletTransfer/index')">
					<view class="mb-6">
						<text class="look-app-icon look-app-icon-transfer grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text>
					</view>
					<view class="grace-grids-text">Transfer</view>
				</view>
			</view>

			<view class="mb-12" style="padding: 24upx 0;">
				<view class="grace-space-between grace-flex-vcenter">
					<view><text class="look-title" style="color: #212452;">ATOM</text></view>
					<view class="tr">
						<view><text class="grace-black" style="font-size: 16px;">$2,134,992,134.32</text></view>
					</view>
				</view>
				<view class="tr grace-border-b mb-6" style="padding-bottom: 12rpx;"><text class="grace-black6 ">123324 ATOM</text></view>
				<view class="grace-black6 grace-space-between">
					<text>Avaliable</text>
					<text>9,012,390,123,901,234.91</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Delegated</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Unbonding</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Reward</text>
					<text>4.90123</text>
				</view>
				<view class="grace-flex-center tc look-gtbg-dark grace-border-radius-small mt-12 grace-box-shadow">
					<text @tap="goSwitch('/pages/delegate/index')" class="flex-1" style="padding: 12rpx 0;">Delegate</text>
					<view class="" style="width: 2rpx;background: #fff;"></view>
					<text @tap="goSwitch('/pages/vote/index')" class="flex-1" style="padding: 12rpx 0;">Vote</text>
				</view>
			</view>

			<view class="grace-flex grace-flex-vcenter mb-12 grace-border-b" style="padding-bottom: 24rpx;" v-for="n in 5" :key="n">
				<view class="flex-1"><text class="look-title" style="color: #212452;">IRIS</text></view>
				<view class="tr">
					<view><text class="grace-black f-16">$2,134,992,134.32</text></view>
					<view><text class="grace-black6">12323 iaa</text></view>
				</view>
			</view>

			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js'

	export default {
		mixins: [SwitchWalletMixin],
		methods: {
			scan() {
				uni.scanCode()
			},
			goSwitch(path) {
				uni.switchTab({
					url: path
				});
			},
			go(path) {
				uni.navigateTo({
					url: path
				});
			},
			goBack() {
				uni.navigateBack();
			},
		},
	};
</script>
