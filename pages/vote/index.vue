<template>
	<gracePage headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-vcenter grace-flex grace-body">
			<text @tap="goBack" style="width: 200rpx;" class="grace-black6 grace-icons icon-arrow-left"></text>
			<text style="flex: 1;text-align: center;font-size: 16px;" class="grace-black">{{ lang.title }}</text>
			<view @tap="switchWallet" class="grace-flex-vcenter grace-flex-end" style="font-weight: 500;width: 200rpx;">
				<text style="margin-right: 12rpx;">Address1</text>
				<text class="look-app-icon look-app-icon-switch"></text>
			</view>
		</view>
		<view slot="gBody" class="grace-body">
			<view class="grace-flex grace-flex-vcenter" style="margin-top: 24rpx;">
				<view class="mr-12"><image style="width: 80rpx;height: 80rpx;" src="/static/vote/vote_pic.png" mode=""></image></view>
				<view class="">
					<view class="look-title">Proposals</view>
					<view class="grace-black9">CosmosHub-3 · 0.32.7</view>
				</view>
			</view>
			<view class="grace-flex-center tc look-gtbg-dark grace-border-radius-small mt-12 grace-box-shadow">
				<text class="flex-1" style="padding: 12rpx 0;">All</text>
				<view class="" style="width: 2rpx;background: #fff;"></view>
				<text class="flex-1" style="padding: 12rpx 0;">Involved</text>
			</view>

			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>
<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

export default {
	mixins: [SwitchWalletMixin],
	computed: {
		lang() {
			return this.$t('vote');
		}
	},
	data() {
		return {
			items: [
				{
					checked: false,
					lang: 'en',
					text: 'USD'
				},
				{
					checked: false,
					lang: 'zh',
					text: 'CNY'
				}
			]
		};
	},
	methods: {
		goBack() {
			uni.navigateBack();
		}
	},
};
</script>
