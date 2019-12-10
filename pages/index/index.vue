<template>
	<gracePage headerBG="#fff">
		<view slot="gHeader" class="grace-flex-center">
			<text style="padding: 0 24upx;width: 200upx;align-self: flex-end;" class="grace-black6">All</text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-black">Look</text>
			<text style="padding: 0 24upx;width: 200upx;text-align: right;align-self: flex-end;" class="grace-black6">Add</text>
		</view>

		<view slot="gBody" class="grace-body">
			<view class="bg-primary   grace-border mb-12" style="padding: 24upx 24upx;margin-top: 24upx;">
				<view class="grace-space-between" style="align-items: center;">
					<view class="">
						<view class="">
							<text class="grace-gray">Assets Total</text>
						</view>
						<view class="">
							<text class="grace-white" style="font-size: 24px;font-weight: bold;">$12,992,134,199</text>
						</view>
					</view>
					<view class="">
						<image style="width: 140upx;height: 140upx;" src="../../static/wallet/asset1.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="grace-flex-center">
				<text class="grace-black6">Address</text>
				<text class="flex-1"></text>
				<text class="grace-black6">Add</text>
			</view>
			
			<view class="grace-bg-white   grace-border" style="padding: 24upx 24upx;margin-top: 24upx;" v-for="n in 10" :key="n">
				<view class="">
					<text class="grace-black6">NAME</text>
					
				</view>
				<view class="mb-6">
					<text class="grace-black9" style="font-size: 12px;">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</text>
				</view>
				<view class="">
					<text class="grace-black6" style="font-size: 16px;">$12,992,134.00</text>
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
