<template>
	<view>
		<!-- 上层 -->
		<view class="set-menu grace-wrap grace-flex-center">
			<view class="grace-flex-center set-theme-img"><image :src="themeImg" mode="widthFix"></image></view>
			<view class="set-theme-title grace-white grace-bold grace-h5">{{themeTitle}}</view>
		</view>
		<view class="set-list grace-form">
			<view class="grace-text">获取每日最新活动，优惠信息早知道。</view>
			<view class="grace-items grace-noborder">
				<view class="grace-label"><text class="grace-bold">接收消息</text></view>
				<view class="other"><switch name="switch" color="#F02B2B" checked/></view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data(){
		return {
			themeImg	: 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/24/5d89b36c3004c.png',
			themeTitle	: '优惠促销',
		}
	},
	onLoad() {
		uni.setNavigationBarColor({
			frontColor : '#ffffff',
			backgroundColor : '#2A7E6D'
		})
	}
}
</script>
<style>
page{background:#F3F5F7;}
.set-body{width:650rpx; margin:0 25rpx; padding:0 25rpx; background:#FFFFFF;}
.set-menu{height:350rpx; background:#2A7E6D;}
.set-theme-img{width:750rpx;height:120rpx; margin-top:50rpx;}
.set-theme-img image{width:120rpx;height:120rpx;border-radius:12rpx;}
.set-theme-title{width:750rpx; height:60rpx; text-align:center; margin-top:20rpx; letter-spacing:2rpx;}
.set-list{width:630rpx; background:#FFFFFF; padding:35rpx; border-radius:20rpx; position:absolute; z-index:1; left:25rpx; top:320rpx;}
.grace-form .grace-items .grace-label{width:500rpx; height:60rpx;font-size:26rpx; line-height:60rpx;color:#666666;}
</style>