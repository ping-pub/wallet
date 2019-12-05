<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="demo_body">
			<view class="demo">
				<image src="https://graceui.oss-cn-beijing.aliyuncs.com/demo2.1/logo2.png" class="index_logo" mode="widthFix"></image>
			</view>
			<view class="demo">
				<text class="grace-text-small grace-black9">兼容uni-app及微信小程序的优秀前端框架\n</text>
				<text class="grace-text-small grace-blue">本页演示 : 使用悬浮挂件</text>
			</view>
		</view>
		<!-- 右侧悬浮 -->
		<button class="menu grace-button grace-icons icon-menu" slot="gRTArea" @tap="menu"></button>
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
		menu : function () {
			uni.showToast({
				title:"您点击了菜单按钮",
				icon:"none"
			})
		}
	},
	components:{
		gracePage
	}
}
</script>
<style>
.menu{width:88rpx; height:88rpx; border-radius:88rpx; line-height:88rpx; text-align:center; justify-content:center; background-color:#FF0036; color:#FFFFFF; font-size:50rpx; padding:0;}
</style>