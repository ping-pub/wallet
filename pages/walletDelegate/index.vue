<template>
	<gracePage headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-center">
			<text @tap="goBack" style="padding: 0 24upx;width: 200upx;align-self: flex-end;" class="grace-black6 grace-icons icon-arrow-down"></text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-black">Wallet</text>
			<text style="padding: 0 24upx;width: 200upx;text-align: right;align-self: flex-end;" class="grace-black6 look-app-icon look-app-icon-update"></text>
		</view>

		<view slot="gBody" class="grace-body">
			<view class="bg-primary grace-border mb-12  grace-border-radius-small" style="padding: 24upx 24upx;margin-top: 24upx;">
				<view class="mb-12">
					<view class="grace-white mb-6 grace-space-between">
						<text class="flex-1" style="font-size: 18px;">NAME</text>
						<text class="look-app-icon look-app-icon-qrcode"></text>
					</view>
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
							<text class="grace-white" style="font-size: 20px;font-weight: bold;">$12,992,134,199</text>
						</view>
					</view>
					<view>
						<image style="width: 100rpx;height: 100rpx;" src="../../static/wallet/asset2.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="grace-flex-center">
				<view class="grace-gtbg-blue-sky" style="width: 10rpx;height: 50rpx;"></view>
				<text class="grace-black6" style="padding: 4rpx 12rpx;font-weight: bold;font-size: 16px;">Coins</text>
				<text class="flex-1"></text>
			</view>
			
			<view class="  grace-border mb-12" v-for="n in 10" :key="n" style="padding: 24upx 24upx;">
				<view class="grace-space-between grace-flex-vcenter">
					<view class="" style="width: 200rpx;">
						<text class="grace-black6">ATOM</text>
					</view>
					<view class="tr">
						<view>
							<text class="grace-black6" style="font-size: 16px;">$12,992,134.00</text>
						</view>
						<view >
							<text class="grace-black9" style="font-size: 12px;">123324 ATOM</text>
						</view>
					</view>
				</view>
				<view class="grace-black9 grace-space-between">
					<text>Avaliable</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black9 grace-space-between">
					<text>Delegated</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black9 grace-space-between">
					<text>Unbonding</text>
					<text>4.90123</text>
				</view>
				<view class="grace-black9 grace-space-between">
					<text>Reward</text>
					<text>4.90123</text>
				</view>
				<view class="grace-flex-center tc">
					<text class="flex-1" style="padding: 12rpx 0;">Delegate</text>
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
