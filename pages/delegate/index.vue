<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="status_bar"></view>
			<view class="grace-flex-center" style="padding: 24rpx 0;padding-top: 48rpx;">
				<text class="look-title">Stake</text>
				<text style="flex: 1;text-align: center;font-size: 18px;"></text>
				<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
					<text style="margin-right: 12rpx;">Address1</text>
					<text class="look-app-icon look-app-icon-switch"></text>
				</view>
			</view>

			<view class="grace-flex tc">
				<view class="flex-1 grace-black6" style="padding: 24rpx;">
					<view class="mb-6"><text class="grace-icons icon-scan grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text></view>
					<view class="grace-grids-text">Delegations</view>
				</view>
				<view class="flex-1 grace-black6" style="padding: 24rpx;" @tap="go('/pages/walletQrcode/index')">
					<view class="mb-6"><text class="grace-icons icon-scan grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text></view>
					<view class="grace-grids-text">Validators</view>
				</view>
				<view class="flex-1 grace-black6" style="padding: 24rpx;" @tap="go('/pages/walletTransfer/index')">
					<view class="mb-6"><text class="grace-icons icon-scan grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text></view>
					<view class="grace-grids-text">Inactive</view>
				</view>
				<view class="flex-1 grace-black6" style="padding: 24rpx;" @tap="go('/pages/walletTransfer/index')">
					<view class="mb-6"><text class="grace-icons icon-scan grace-box-shadow" style="font-size: 20px;padding:16rpx;border-radius: 100%;"></text></view>
					<view class="grace-grids-text">Jailed</view>
				</view>
			</view>

			<view class="grace-flex grace-flex-vcenter">
				<view class="mr-12"><image style="width: 60rpx;height: 60rpx;" src="/static/delegate/validator.png" mode=""></image></view>
				<view class="">
					<view class="look-title-sm">Delegations</view>
					<view class="grace-black9">CosmosHub-3 · 0.32.7</view>
				</view>
			</view>

			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

export default {
	mixins: [SwitchWalletMixin],
	methods: {
		go(path) {
			uni.navigateTo({
				url: path
			});
		},
		goBack() {
			uni.navigateBack();
		}
	}
};
</script>
