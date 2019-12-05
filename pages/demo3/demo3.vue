<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="demo_body">
			<view class="demo">
				<image src="https://graceui.oss-cn-beijing.aliyuncs.com/demo2.1/logo2.png" class="index_logo" mode="widthFix"></image>
			</view>
			<view class="demo">
				<text class="grace-text-small grace-black9">兼容uni-app及微信小程序的优秀前端框架\n</text>
				<text class="grace-text-small grace-black9">本页演示 : </text>
				<text class="grace-text-small grace-blue" style="margin-left:10rpx;">使用底部导航\n</text>
				<text class="grace-text-small grace-blue">:customHeader="false" 代表关闭自定义导航使用系统原生导航</text>
			</view>
		</view>
		<!-- 底部导航 -->
		<view slot="gFooter">
			<view class="grace-footer" style="position:relative;">
				<view class="icon-btn">
					<view class="icon grace-icons icon-home"></view>
					<view class="text">首页</view>
				</view>
				<view class="icon-btn">
					<view class="icon grace-icons icon-shoucang active"></view>
					<view class="text active">收藏</view>
				</view>
				<button type="warn" style="background:#E55D52;">立即购买</button>
				<button type="warn" style="background:#F37B1D;">加入购物车</button>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
export default {
	data() {
		return {
			
		}
	},
	onLoad:function(){
	},
	methods:{
	},
	components:{
		gracePage
	}
}
</script>
<style>
</style>