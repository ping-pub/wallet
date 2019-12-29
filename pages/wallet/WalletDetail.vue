<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Address1">
			<view @tap="switchWallet"><text class="grace-icons icon-set"></text></view>
		</PageTitle>
		<view slot="gBody">
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">基础信息</text>
				</view>
				<view class="action">
					<!-- 					<text>领取奖励</text>
					<text class="cuIcon-right"></text> -->
				</view>
			</view>
			<view class="bg-white" style="padding: 20rpx 40rpx;">
				<view class=" text-gray">地址</view>
				<view class="text-gray mb-12">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</view>
				<view class=" text-gray">总额</view>
				<view class="text-green f-18">$12,992,134,199</view>
			</view>

			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">ATOM</text>
				</view>
				<view class="action"></view>
			</view>
			<view class="cu-list menu">
				<view class="cu-item">
					<view class="content"><text class="text-black">总额</text></view>
					<view class="action"><text class="text-green text-lg">$2,134,992,134.32</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">收益</text></view>
					<view class="action"><text class=" text-green text-lg">+ 823123</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">数量</text></view>
					<view class="action"><text class=" text-grey text-lg">123324 ATOM</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">单价</text></view>
					<view class="action"><text class=" text-grey text-lg">1 ATOM = $5.2</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">可用</text></view>
					<view class="action"><text class=" text-grey text-lg">90,123,901,234.91</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">委托</text></view>
					<view class="action"><text class=" text-grey text-lg">90,123,901,234.91</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">锁定</text></view>
					<view class="action"><text class=" text-grey text-lg">90,123,901,234.91</text></view>
				</view>
			</view>

			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Kava</text>
				</view>
				<view class="action"><view class="text-green">$2,134,992,134.32</view></view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Kava = $0.5</text>
				</view>
				<view class="action"><view class="">12323 iaa</view></view>
			</view>
			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Iris</text>
				</view>
				<view class="action"><view class="text-green">$2,134,992,134.32</view></view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Iris = $0.5</text>
				</view>
				<view class="action"><view class="">12323 iris</view></view>
			</view>
			<view class="page-space"></view>
		
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

export default {
	mixins: [SwitchWalletMixin],
	methods: {
		scan() {
			uni.scanCode();
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
		}
	}
};
</script>
