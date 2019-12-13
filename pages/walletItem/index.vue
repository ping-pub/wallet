<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="grace-flex-center" style="padding: 24rpx 0;">
				<text class="look-title">Wallet Detail</text>
				<text style="flex: 1;text-align: center;font-size: 18px;"></text>
				<view class="grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
					<text style="margin-right: 12rpx;">Address1</text>
					<text class="look-app-icon look-app-icon-switch"></text>
				</view>
			</view>
			<view class="look-gtbg-dark grace-box-shadow grace-border mb-12  grace-border-radius-small" style="padding: 24upx 24upx;">
				<view class="mb-12">
					<!-- 	<view class="grace-white mb-6 grace-space-between">
						<text class="flex-1" style="font-size: 18px;">NAME</text>
						<text class="look-app-icon look-app-icon-qrcode"  @tap="go('/pages/walletQrcode/index')"></text>
					</view> -->
					<view class="">
						<text class="grace-gray">Address</text>
					</view>
					<view class="grace-white">
						<view class="grace-ellipsis">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</view>
					</view>
				</view>
				<view class="grace-space-between">
					<view>
						<view class="">
							<text class="grace-gray">Total</text>
						</view>
						<view class="">
							<text class="grace-white" style="font-size: 20px;font-weight: bold;">≈ $12,992,134,199</text>
						</view>
					</view>
					<view>
						<image style="width: 100rpx;height: 100rpx;" src="../../static/wallet/asset2.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="grace-flex tc">
				<view class="flex-1 grace-black6" style="padding: 24rpx;">
					<view class="grace-icons icon-scan" style="font-size: 24px;"></view>
					<view class="grace-grids-text">Scan</view>
				</view>
				<view class="flex-1 grace-black6" style="padding: 24rpx;" @tap="go('/pages/walletQrcode/index')">
					<view class="look-app-icon look-app-icon-qrcode" style="font-size: 24px;"></view>
					<view class="grace-grids-text">Recevie</view>
				</view>
				<view class="flex-1 grace-black6" style="padding: 24rpx;" @tap="go('/pages/walletTransfer/index')">
					<view class="look-app-icon look-app-icon-transfer" style="font-size: 24px;"></view>
					<view class="grace-grids-text">Transfer</view>
				</view>
			</view>

			<view class="mb-12" v-for="n in 10" :key="n" style="padding: 24upx 24upx;">
				<view class="grace-space-between grace-flex-vcenter">
					<view>
						<text class="look-title" style="color: #212452;">ATOM</text>
					</view>
					<view class="tr">
						<view>
							<text class="grace-black6" style="font-size: 18px;">≈ $12,992,134,992,134.32</text>
						</view>
					</view>
				</view>
				<view class="tr">
					<text class="grace-black6 ">123324</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Avaliable</text>
					<text>9,012,390,123,901,234.91</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Delegated</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Unbonding</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black6 grace-space-between">
					<text>Reward</text>
					<text>4.90123</text>
				</view>
				<view class="grace-flex-center tc look-gtbg-dark grace-border-radius-small mt-12 grace-box-shadow">
					<text class="flex-1" style="padding: 12rpx 0;">Delegate</text>
					<view class="" style="width: 2rpx;background: #fff;"></view>
					<text class="flex-1" style="padding: 12rpx 0;">Vote</text>
				</view>
			</view>
			<view style="height: 80rpx;">

			</view>
		</view>

	</gracePage>
</template>

<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import gracePopupMenu from '../../graceUI/components/gracePopupMenu.vue';
	import graceNavBar from "../../graceUI/components/graceNavBar.vue";
	const systemInfo = require('../../graceUI/jsTools/systemInfo.js');

	export default {
		data() {
			return {
				show1: false,
				tabHeight: 300,
				currentIndex: 0,
				tabs: ['All', 'Cosmos', 'Kava', 'Iris', 'Cell']
			}
		},
		onLoad: function() {
			//获取屏幕高度及比例
			const system = systemInfo.info();
			this.tabHeight = system.windowHeight - system.iPhoneXBottomHeightPx - uni.upx2px(110);
		},
		methods: {
			go(path) {
				uni.navigateTo({
					url: path
				})
			},
			goBack() {
				uni.navigateBack()
			},
			showDrawer1: function() {
				this.show1 = !this.show1;
			},
			navChange: function(e) {
				this.currentIndex = e;
			},
			swiperChange: function(e) {
				var index = e.detail.current;
				this.currentIndex = index;
			}
		},
		components: {
			gracePage,
			graceNavBar,
			gracePopupMenu
		}
	}
</script>
