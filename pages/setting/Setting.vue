<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="status_bar"></view>
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">设置</text>
					<text class="bg-black"></text>
				</view>
			</view>
		</view>
		<view slot="gBody">
			<view class="cu-list menu">
				<view class="cu-item" @tap="go('/pages/wallet/WalletManage')">
					<view class="content">
						<text class="cuIcon-pay text-grey"></text>
						<text class="text-black">{{ lang.manageWallet }}</text>
					</view>
					<view class="action">
						<text class=" text-grey text-sm"><text class="cuIcon cuIcon-right"></text></text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-light text-grey"></text>
						<text class="text-black">{{ lang.serverHost }}</text>
					</view>
					<view class="action">
						<text class=" text-grey text-sm"><text class="cuIcon cuIcon-right"></text></text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-comment text-grey"></text>
						<text class="text-black">{{ lang.language }}</text>
					</view>
					<view class="action">
						<text class=" text-grey text-sm"><text class="cuIcon cuIcon-right"></text></text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-recharge text-grey"></text>
						<text class="text-black">Currency</text>
					</view>
					<view class="action">
						<text class=" text-grey text-sm">
							USD
							<text class="cuIcon cuIcon-right"></text>
						</text>
					</view>
				</view>
				<view class="cu-item" @tap="openBrowser('https://look.ping.pub')">
					<view class="content">
						<text class="cuIcon-link text-grey"></text>
						<text class="text-black">{{ lang.browser }}</text>
					</view>
					<view class="action">
						<text class=" text-grey text-sm">
							https://look.ping.pub
							<text class="cuIcon cuIcon-right"></text>
						</text>
					</view>
				</view>
			</view>

			<view class="page-space"></view>
			<view class="cu-bar"></view>
		</view>

	</gracePage>
</template>
<script>
import BaseMixin from '../../components/BaseMixin.js'

export default {
	mixins: [BaseMixin],
	computed: {
		lang() {
			return this.$t('setting');
		}
	},
	methods: {
		openBrowser(url) {
			// #ifdef APP-PLUS
			plus.runtime.openURL(url);
			// #endif
			// #ifdef H5
			window.open(url, '_self');
			// #endif
		}
	}
};
</script>

<style scoped>
.list-title {
	padding: 6rpx 12rpx;
}
</style>
