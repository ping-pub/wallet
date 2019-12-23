<template>
	<gracePage  headerBG="#fff">
		<PageTitle slot="gHeader" title="Proposal Detail">
		</PageTitle>
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
			
			<view class="grace-flex grace-flex-vcenter mb-12">
				<view class="mr-12"><image style="width: 80rpx;height: 80rpx;" src="/static/vote/vote_pic.png" mode=""></image></view>
				<view class="flex-1">
					<view  class="grace-space-between grace-flex-vbottom">
						<text class="look-title-sm">Proposals</text>
					</view>
					<view>
					  <text class="grace-black9">CosmosHub-3 · 0.32.7</text>
					</view>
				</view>
			</view>
			
			<view class="mb-12 grace-box-shadow grace-bg-white grace-border-radius-small" style="padding: 24rpx 0;" v-for="n in 10" :key="n">
				<view class="mb-6 " style="font-size: 12px;">
					<text class="grace-bg-green" style="padding: 0 24rpx;">投票中</text>
					
				</view>
				<view class="" style="padding: 0 24rpx;">
					<view class="look-title-sm mt-12 grace-black">
						是否支持冷钱包投票?
					</view>
					<view class="grace-flex grace-flex-vcenter tc mt-12 mb-12">
						<view class="flex-1">
							<view class="f-16 grace-white">
								23%
							</view>
							<view class="grace-black9">
								Yes
							</view>
						</view>
						<view class="flex-1">
							<view class="f-16 grace-white">
								36%
							</view>
							<view class="grace-black9">
								No
							</view>
						</view>
						<view class="flex-1">
							<view class="f-16 grace-white">
								22%
							</view>
							<view class="grace-black9">
								Width
							</view>
						</view>
						<view class="flex-1">
							<view class="f-16 grace-white">
								7.89%
							</view>
							<view class="grace-black9">
								Rewards
							</view>
						</view>
					</view>
					<view class="grace-gray" style="font-size: 12px;">
						投票倒计时：20天12小时12分
					</view>
				</view>
			</view>

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
