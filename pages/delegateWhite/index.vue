<template>
	<gracePage headerBG="#fff">
		<view class="grace-bg-white" slot="gHeader">
			<view class="status_bar"></view>
			<view class="grace-flex-center" style="padding: 32rpx 24rpx 12rpx 24rpx;">
				<text class="look-title">Staking</text>
				<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white"></text>
				<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
					<text style="margin-right: 12rpx;">Address1</text>
					<text class="look-app-icon look-app-icon-switch"></text>
				</view>
			</view>
		</view>
		<view slot="gBody">
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />

			<view class="grace-flex grace-flex-vcenter tc mt-12 grace-body" style="margin-bottom: 24rpx;padding-top: 24rpx;">
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
			<view class="grace-body" style="padding-top: 24rpx;">
				<view class="grace-flex-center tc grace-bg-white grace-border-radius-small grace-box-shadow look-gtbg-dark  mb-12">
					<text class="flex-1" style="padding: 12rpx 0;font-weight: bold;">Delegations</text>
					<text @click="" class="flex-1 grace-gray" style="padding: 12rpx 0;">Validators</text>
					<text @click="" class="flex-1 grace-gray" style="padding: 12rpx 0;">Calculation</text>
				</view>
			</view>


			<view class="grace-flex grace-flex-vcenter tc grace-bg-white grace-border-radius-small " style="padding: 24rpx 0 24rpx 0;margin-top: 0;">
				<view class="flex-1">
					<view class="grace-black f-18">1231232500</view>
					<view class="grace-black6">已委托总数</view>
				</view>
				<view class="flex-1">
					<view class="grace-green f-18">+500</view>
					<view class="grace-black6 grace-flex-vcenter grace-flex-center">
					<text>待领取奖励</text>
					 <text class="grace-icons icon-arrow-right" style="font-size: 14px;"></text>
					 </view>
				</view>
			</view>

			<view class="page-space"></view>
			<view v-for="n in 30" :key="n" @tap="go('/pages/delegateItem/index')">
				<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
					<view class="grace-flex grace-flex-vbottom">
						<text class="flex-1 f-16" style="font-size: 18px;">Huobi Wallet</text>
						<text class="f-16 grace-black">5998989989898</text>
					</view>
					<view class="grace-flex grace-flex-vbottom">
						<text class="flex-1 grace-black9">Rewards 25%</text>
						<text class="f-16 grace-green">+ 0.0012</text>
					</view>
				</view>
			</view>


		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
	import BaseMixin from '../../components/BaseMixin.js'

	export default {
		mixins: [BaseMixin, SwitchWalletMixin],
		data() {
			return {
				tab: 'Delegations'
			}
		},
	};
</script>
