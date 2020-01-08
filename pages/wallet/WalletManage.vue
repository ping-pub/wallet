<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title"><text @tap="go('/pages/wallet/WalletCreate?create=1')" class="cuIcon-add big-tap"></text></PageTitle>

		<view slot="gBody">
			<view class="page-space"></view>

			<view class="" v-for="(item, key) of chains" :key="key" v-if="item.wallets.length > 0">
				<view class="cu-bar bg-white">
					<view class="action">
						<image style="width: 48rpx;height: 48rpx;margin-right: 20rpx;" :src="item.logo" mode=""></image>
						<text class="text-lg text-bold">{{ item.name }}</text>
					</view>
					<view class="action">
						<text class="cu-tag">{{ item.unit || '' }}</text>
					</view>
				</view>

				<view class="cu-list menu-avatar bg-white">
					<view class="cu-item" v-for="(address, index) of item.wallets" :key="index" @tap="go('/pages/wallet/WalletCreate?address='+ address)">
						<view class="content" style="left: 40rpx;">
							<view class="text-black">{{ wallets[address].name }}</view>
							<view class="text-gray">{{ address }}</view>
						</view>
						<view class="action">
							<text class="cuIcon-edit"></text>
						</view>
					</view>
					
				</view>
				
				<view class="page-space"></view>
			</view>
			<PageEmpty v-if="Object.keys(wallets).length === 0"></PageEmpty>
		</view>
	</gracePage>
</template>
<script>
	import BaseMixin from '../../components/BaseMixin.js';
	export default {
		mixins: [BaseMixin],
		computed: {
			lang() {
				return this.$t('pagesWalletManage');
			},
		},
		methods: {
			goBack() {
				uni.navigateBack();
			}
		}
	};
</script>
