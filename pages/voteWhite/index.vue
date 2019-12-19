<template>
	<gracePage headerBG="#fff">
		<view class="grace-bg-white" slot="gHeader">
			<view class="status_bar"></view>
			<view class="grace-flex-center" style="padding: 32rpx 24rpx 12rpx 24rpx;">
				<text class="look-title">Goverance</text>
				<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white"></text>
				<view @tap="switchWallet" class="grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
					<text style="margin-right: 12rpx;">Address1</text>
					<text class="look-app-icon look-app-icon-switch"></text>
				</view>
			</view>
		</view>
		<view slot="gBody" class="grace-body">
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />

			<view class="grace-flex grace-flex-vcenter mb-12" style="padding-top: 32rpx;">
				<view class="mr-12">
					<image style="width: 80rpx;height: 80rpx;" src="/static/vote/vote_pic.png" mode=""></image>
				</view>
				<view class="flex-1">
					<view class="grace-space-between grace-flex-vbottom">
						<text class="look-title-sm">Cosmos</text>
					</view>
					<view>
						<text class="grace-black9">CosmosHub-3 · 0.32.7</text>
					</view>
				</view>
			</view>

			<view class="mb-12 grace-box-shadow grace-bg-white grace-border-radius-small" style="padding: 24rpx 0;" v-for="n in 10"
			 :key="n" @tap="go('/pages/voteItem/index')">
				<view class="mb-6 " style="font-size: 12px;">
					<text class="grace-bg-green" style="padding: 0 24rpx;">投票中</text>

				</view>
				<view class="" style="padding: 0 24rpx;">
					<view class="look-title-sm mt-12 grace-black">
						是否支持冷钱包投票?
					</view>
					<view class="grace-flex grace-flex-vcenter tc mt-12 mb-12">
						<view class="flex-1">
							<view class="f-16 grace-black">
								23%
							</view>
							<view class="grace-black6">
								Yes
							</view>
						</view>
						<view class="flex-1">
							<view class="f-16 grace-black">
								36%
							</view>
							<view class="grace-black6">
								No
							</view>
						</view>
						<view class="flex-1">
							<view class="f-16 grace-black">
								22%
							</view>
							<view class="grace-black6">
								Width
							</view>
						</view>
						<view class="flex-1">
							<view class="f-16 grace-black">
								7.89%
							</view>
							<view class="grace-black6">
								Rewards
							</view>
						</view>
					</view>
					<view class="grace-black6" style="font-size: 12px;">
						投票倒计时：20天12小时12分
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
		computed: {
			lang() {
				return this.$t('vote');
			}
		},
		data() {
			return {
				items: [{
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
