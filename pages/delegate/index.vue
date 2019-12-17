<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="status_bar"></view>
			<view class="grace-flex-center" style="padding: 24rpx 0;padding-top: 32rpx;">
				<text class="look-title">Kava</text>
				<text style="flex: 1;text-align: center;font-size: 18px;"></text>
				<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
					<text style="margin-right: 12rpx;">Address1</text>
					<text class="look-app-icon look-app-icon-switch"></text>
				</view>
			</view>	
			
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
			
			
			<view class="grace-flex grace-flex-vcenter tc mt-12" style="margin-bottom: 48rpx;">
				<view style="padding: 0 24rpx;">
					<image style="width: 40rpx;height: 40rpx;" src="../../static/wallet/kava.svg" mode=""></image>
				</view>
				<view class="flex-1">
					<view class="f-16 grace-black">
						1233241
					</view>
					<view class="grace-black9">
						Tokens
					</view>
				</view>
				<view class="flex-1">
					<view class="f-16 grace-black">
						125
					</view>
					<view class="grace-black9">
						Validators
					</view>
				</view>
				<view class="flex-1">
					<view class="f-16 grace-black">
						7.89%
					</view>
					<view class="grace-black9">
						Rewards
					</view>
				</view>
			</view>
			
			<view class="grace-flex-center tc look-gtbg-dark grace-border-radius-small grace-box-shadow  mb-12">
				<text class="flex-1" style="padding: 12rpx 0;font-weight: bold;">Delegations</text>
				<view class="" style="width: 2rpx;background: #fff;"></view>
				<text @click="" class="flex-1 grace-gray" style="padding: 12rpx 0;">Validators</text>
			</view>
			
			<view class="grace-flex grace-flex-vcenter mb-12">
<!-- 				<view class="mr-12"><image style="width: 60rpx;height: 60rpx;" src="/static/delegate/validator.png" mode=""></image></view>
 -->				<view class="">
					<view class="grace-black6">已委托总数  500</view>
					<view class="grace-black6">待领取奖励  500</view>
				</view>
			</view>
			
			<view class="mb-12" style="padding-bottom: 24rpx;" v-for="n in 3" :key="n">
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1">Huobi Wallet</text>
					<text class="f-16">5998989989898</text>
				</view> 
				<view class="grace-flex">
					<text class="flex-1">Rewards  25%</text>
					<text class="f-16">0.0012</text>
				</view>
			</view>

		</view>
	</gracePage>
</template>

<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

export default {
	mixins: [SwitchWalletMixin],
	data() {
		return {
			tab: 'Delegations'
		}
	},
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
