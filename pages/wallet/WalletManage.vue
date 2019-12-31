<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Wallet Manage"><text @tap="go('/pages/wallet/WalletCreate')" class="cuIcon-add big-tap"></text></PageTitle>

		<view slot="gBody">
			<view class="page-space"></view>

			<view class="" v-for="(item, key) of chains" :key="key">
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">{{ item.name }}</text>
					</view>
					<view class="action">
						<image style="width: 48rpx;height: 48rpx;" :src="item.logo" mode=""></image>
					</view>
				</view>

				<view class="cu-list menu-avatar bg-white">
					<view class="cu-item" v-for="(el, index) of item.wallets" :key="index">
						<view class="content" style="left: 40rpx;">
							<view class="text-black">{{ el.name }}</view>
							<view class="text-gray">{{ el.address }}</view>
						</view>
						<view class="action">
							<text class="cuIcon-edit"></text>
						</view>
					</view>
					<PageEmpty v-if="item.wallets.length === 0"></PageEmpty>
				</view>
				
				<view class="page-space"></view>
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
