<template>
	<view class="">
		<view class="bg-white">
			<view class="cu-bar bg-white">
				<view class="action">
					<image style="width: 48rpx;height: 48rpx;margin-right: 20rpx;" :src="currentChain.logo" mode=""></image>
					<text class="text-lg text-bold">{{ currentChain.name }}</text>
				</view>
				<view class="action">
					<text class="cu-tag">{{ currentChain.unit || '' }}</text>
				</view>
			</view>

			<view class="grace-flex tc" style="padding: 20rpx;">
				<view class="flex-1">
					<view class="text-black text-lg">1233241</view>
					<view class="text-gray text-sm">Tokens</view>
				</view>
				<view class="flex-1">
					<view class="text-black text-lg">125</view>
					<view class="text-gray text-sm">Validators</view>
				</view>
				<view class="flex-1">
					<view class="text-black text-lg">7.89%</view>
					<view class="text-gray text-sm">Rewards</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseMixin from '../../components/BaseMixin.js';

	export default {
		mixins: [BaseMixin],
	methods: {
		init() {
		}
	}
};
</script>
