<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Wallet Detail">
			<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 12rpx 24rpx;font-weight: 500;">
				<text style="margin-right: 12rpx;">Address1</text>
				<text class="look-app-icon look-app-icon-switch"></text>
			</view>
		</PageTitle>
		<view slot="gBody">
			<view class="grace-body">
				<view class="look-gtbg-dark grace-box-shadow grace-border mb-12 mt-12  grace-border-radius-small" style="padding: 24rpx">
					<view class="mb-12">
						<view class="grace-white">
							<view class="grace-ellipsis">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</view>
						</view>
					</view>
					<view class="grace-space-between grace-flex-vcenter">
						<text class="grace-white" style="font-size: 22px;font-weight: bold;">$12,992,134,199</text>
						<view>
							<image style="width: 80rpx;height: 80rpx;" src="../../static/wallet/cosmoshub.svg" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="grace-flex tc" style="padding: 32rpx 0 24rpx 0;">

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
					<view class="grace-grids-text">Send</view>
				</view>
				<view class="flex-1 grace-black6" @click="scan">
					<view class="mb-6">
						<text class="grace-icons icon-set grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text>
					</view>
					<view class="grace-grids-text">Rename</view>
				</view>
			</view>

			<view class="page-space"></view>

			<view class="mb-12" style="padding: 24rpx 32rpx;">
				<view class="grace-space-between grace-flex-vcenter">
					<view><text class="look-title" style="color: #212452;">ATOM</text></view>
					<view class="tr">
						<text class="grace-black f-18">$2,134,992,134.32</text>
					</view>
				</view>
				<view class="grace-border-b mb-6 grace-flex grace-space-between" style="padding-bottom: 12rpx;">
					<text class="grace-black6 f-16">1 ATOM = $5.2</text>
					<text class="grace-black6 f-16">123324 ATOM</text>
				</view>
				<view class="grace-black6 grace-space-between mb-6">
					<text>Avaliable</text>
					<text class="f-16">9,012,390,123,901,234.91</text>
				</view>
				<view class="grace-black6 grace-space-between mb-6">
					<text>Delegated</text>
					<text class="f-16">4.90123</text>
				</view>
				<view class="grace-black6 grace-space-between mb-6">
					<text>Unbonding</text>
					<text class="f-16">4.90123</text>
				</view>
				<view class="grace-black6 grace-space-between mb-6">
					<text>Reward</text>
					<text class="grace-green f-16">+ 4.90123</text>
				</view>
				<view class="grace-flex-center tc look-gtbg-dark grace-border-radius-small mt-12 grace-box-shadow">
					<text @tap="goSwitch('/pages/delegate/index')" class="flex-1" style="padding: 12rpx 0;">Delegate</text>
					<view class="" style="width: 2rpx;background: #fff;"></view>
					<text @tap="goSwitch('/pages/vote/index')" class="flex-1" style="padding: 12rpx 0;">Vote</text>
				</view>
			</view>

			<view class="page-space"></view>
			<view class="grace-border-b" v-for="n in 5" :key="n" style="padding: 24rpx;">
				<view class="grace-flex grace-flex-vcenter ">
					<view class="flex-1"><text class="look-title" style="color: #212452;">IRIS</text></view>
					<view class="tr">
						<view><text class="grace-black f-16">$2,134,992,134.32</text></view>
					</view>
				</view>
				<view class="grace-flex grace-space-between">
					<text class="grace-black6">1 IRIS = $0.5</text>
					<text class="grace-black6">12323 iaa</text>
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
