<template>
	<view>
		<!-- 页面功能区域 启动页关闭后再展示 -->
		<view class="grace-body" v-if="!startBannerShow">
			<!-- 根据项目真实需求 自行编写 -->
		</view>
		<!-- 启动广告 -->
		<view class="gui-start-banner" v-if="startBannerShow">
			<view class="gui-start-banner-skip" @tap.stop="closeStartBanner">跳过</view>
			<swiper 
			:indicator-dots="true" indicator-active-color="#7BB830" indicator-color="rgba(0,0,0,0.3)" 
			:autoplay="false" :style="{height:startBannerHeight+'px'}">
				<!-- 启动图片建议纯色背景 此处设置 swiper-item 背景颜色与图片背景颜色相同即可实现全屏效果 -->
				<swiper-item style="background-color:#FFFFFF;">
					<image src="https://graceui.oss-cn-beijing.aliyuncs.com/startBanner/1.png" mode="widthFix"></image>
				</swiper-item>
				<swiper-item style="background-color:#FFFFFF;">
					<image src="https://graceui.oss-cn-beijing.aliyuncs.com/startBanner/2.png" mode="widthFix"></image>
				</swiper-item>
				<swiper-item style="background-color:#FFFFFF;">
					<image src="https://graceui.oss-cn-beijing.aliyuncs.com/startBanner/3.png" mode="widthFix"></image>
					<view class="gui-start-banner-close" @tap.stop="closeStartBanner">开始体验</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
var graceSysInfo = require('@/graceUI/jsTools/systemInfo.js');
export default {
    data(){
        return {
			startBannerShow : true,
			startBannerHeight : 500
		}
    },
    onLoad:function(){
		// 读取本地数据 gui-start-banner 判断用户是否第一次使用 app 
		// 来决定是否展示启动广告
		var startBannerShow = uni.getStorageSync("startBannerShow");
		if(startBannerShow == '' || !startBannerShow){
			var system = graceSysInfo.info();
			this.startBannerHeight = system.windowHeight;
			this.startBannerShow = true;
		}else{
			this.startBannerShow = false;
		}
	},
    methods:{
		closeStartBanner : function(){
			this.startBannerShow = false;
			//此处使用 uni.setStorageSync() 设置 startBannerShow = 'ishow';
			// 下次启动 app 时将不再展示启动广告
		}
	}
}
</script>
<style>
.gui-start-banner-skip{width:100rpx; height:50rpx; border-radius:50rpx; text-align:center; border:1px solid #999999; color:#999999; font-size:22rpx; line-height:50rpx; position:absolute; z-index:9999; top:120rpx; right:50rpx;}
.gui-start-banner{width:100%; position:fixed; z-index:9998; top:0; left:0; bottom:0;}
.gui-start-banner swiper{width:100%; height:500rpx; background-color:#FFFFFF;}
.gui-start-banner swiper-item{width:100%; display:flex; flex-direction: column; justify-content:center; align-items:center; font-size:0;}
.gui-start-banner swiper-item image{width:100%;}
.gui-start-banner-close{width:220rpx; height:80rpx; border-radius:80rpx; margin-top:80rpx; text-align:center; border:1px solid #F97D7C; color:#F97D7C; font-size:28rpx; line-height:80rpx;}
</style>