<template>
	<gracePage :customHeader="false">
		<view slot="gBody">
			<view class="look-gtbg-dark">
				<view class="grace-flex-center" style="padding: 24rpx;">
					<text class="grace-white look-title">Look</text>
					<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-white"></text>
					<view class="grace-white grace-flex-vcenter grace-flex" style="padding: 4rpx 0;font-weight: 500;">
						<text style="margin-right: 12rpx;">CosmosHub-3</text>
						<text class="look-app-icon look-app-icon-switch"></text>
					</view>
				</view>
				<view class="grace-space-between" style="align-items: center;padding: 60rpx 24rpx 48rpx 24rpx">
					<view class="">
						<view class="">
							<text class="grace-gray">Assets ≈</text>
						</view>
						<view class="">
							<text class="grace-white" style="font-size: 24px;font-weight: bold;">$12,992,134,199</text>
						</view>
					</view>
					<view class="">
						<image style="width: 140upx;height: 140upx;" src="../../static/wallet/asset1.png" mode=""></image>
					</view>
				</view>
				<view class="grace-bg-white grace-space-between grace-flex-vbottom " style="border-radius: 12rpx 12rpx 0 0;padding: 24rpx 24rpx 0 24rpx;">
					<text class="look-title-sm">Wallets</text>
					<text class="grace-black6" @click="go('/pages/walletManage/index')">
						<text class="look-app-icon look-app-icon-manage mr-6 f-16"></text>
						<text>Manage</text>
					</text>
				</view>
			</view>
			
			<view class="grace-body">
				
				<view v-for="n in 10" :key="n"  class="grace-box-shadow mb-12 grace-border grace-border-radius-small" style="padding: 24upx 24upx;margin-top: 24upx;">
					<view class="mb-6">
						<view class="grace-space-between mb-6" >
							<text  @tap="goSwitch('/pages/walletItem/index')" class="flex-1 grace-flex-vcenter" >
								<text class="f-16">Address{{n}}</text>
							  <text class="grace-icons icon-arrow-right grace-black9 f-16" style="font-size: 16px;"></text>
							</text>
							<text class="look-app-icon look-app-icon-qrcode grace-black9"  @tap="go('/pages/walletQrcode/index')" ></text>
						</view>
						<view class="">
							<text class="grace-black9">Address</text>
						</view>
						<view class="grace-black6">
							<view class="grace-ellipsis">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</view>
						</view>
					</view>
					<view class="grace-space-between grace-flex-vbottom" >
						<view>
							<view class="">
								<text class="grace-black9">Total</text>
							</view>
							<view class="">
								<text class="grace-black6" style="font-size: 16px;font-weight: 500;">≈ $12,992,134,199</text>
							</view>
						</view>
						<view>
							<image style="width: 60rpx;height: 60rpx;" src="../../static/wallet/asset3.png" mode=""></image>
						</view>
					</view>
				</view>
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
			goSwitch(path) {
				uni.switchTab({
					url: path
				})
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
