<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Wallet Manage"><text @tap="go('/pages/walletAdd/walletAdd')" class="cuIcon-add"></text></PageTitle>

		<view slot="gBody">
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Cosmos</text>
				</view>
				<view class="action"><image style="width: 48rpx;height: 48rpx;" src="../../static/wallet/cosmoshub.svg" mode=""></image></view>
			</view>
			
			<view class="cu-list menu-avatar bg-white">
				<view class="cu-item" v-for="n in 2" :key="n">
					<view class="content" style="left: 40rpx;">
						<view class="text-black">Address1</view>
						<view class="text-gray text-sm">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
					</view>
					<view class="action">
						<text class="cuIcon-edit"></text>
					</view>
				</view>
			</view>
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Kava</text>
				</view>
				<view class="action"><image style="width: 48rpx;height: 48rpx;" src="../../static/wallet/kava.svg" mode=""></image></view>
			</view>

			<view class="cu-list menu-avatar bg-white">
				<view class="cu-item" v-for="n in 2" :key="n">
					<view class="content" style="left: 40rpx;">
						<view class="text-black">Address1</view>
						<view class="text-gray text-sm">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
					</view>
					<view class="action">
						<text class="cuIcon-edit"></text>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import BaseMixin from '../../components/BaseMixin.js';
export default {
	mixins: [BaseMixin],
	methods: {
		goBack() {
			uni.navigateBack();
		}
	}
};
</script>
