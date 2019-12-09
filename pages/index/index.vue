<template>

	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="grace-margin-top">
				<graceNavBar :size="null" activeLineWidth="100%" padding="16rpx" :items="tabs" :currentIndex="currentIndex" @change="navChange"></graceNavBar>
			</view>
			<swiper class="swiper" :style="{height:tabHeight+'px'}" :current="currentIndex" @change="swiperChange">
				<swiper-item v-for="(item, index) in tabs" :key="index">
					<view class="grace-card-view">
						<view class="grace-card-body grace-border-b">
							<view class="grace-card-desc">
								<view class="grace-card-title">
									<text class="grace-card-name">姓名</text>
									<text class="grace-card-name grace-text-small grace-blue">补充信息</text>
								</view>
								<text class="grace-card-text">地址</text>
								<text class="grace-card-text">手机号</text>
							</view>
						</view>
						<view class="grace-card-footer">
							stake vote
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</gracePage>
</template>

<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import graceNavBar from "../../graceUI/components/graceNavBar.vue";
	const systemInfo = require('../../graceUI/jsTools/systemInfo.js');

	export default {
		data() {
			return {
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
			graceNavBar
		}
	}
</script>
<style>
	/* 局部选项卡应该固定高度 可以避免选项切换引起的页面抖动 */
	.swiper {
		width: 100%;
		height: 388rpx;
	}
</style>
