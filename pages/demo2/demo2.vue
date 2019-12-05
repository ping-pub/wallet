<template>
	<gracePage headerBG="#55D6BA" statusBarBG="#55D6BA">
		<view class="grace-header-body" slot="gHeader">
			<text class="grace-header-icons grace-icons icon-arrow-left grace-white" @tap.stop="goback"></text>
			<view class="grace-header-content">
				<text class="grace-header-text grace-ellipsis grace-white">自定义头部导航，放什么内容您自己来~</text>
			</view>
			<text class="grace-header-icons grace-icons icon-set grace-white" style="font-size:22px;" @tap.stop="setfun"></text>
		</view>
		<!-- 页面主体 -->
		<view slot="gBody" class="demo_body">
			<view class="demo">
				<image src="https://graceui.oss-cn-beijing.aliyuncs.com/demo2.1/logo2.png" class="index_logo" mode="widthFix"></image>
			</view>
			<view class="demo">
				<text class="grace-text-small grace-black9">兼容uni-app及微信小程序的优秀前端框架\n</text>
				<text class="grace-text-small grace-black9">本页演示 : \n</text>
				<text class="grace-text-small grace-blue">开启自定义导航 + 处理沉浸式</text>
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
		goback : function () { uni.navigateBack({}); },
		setfun : function () {
			uni.showToast({title:"您点击了设置", icon:"none"});
		}
	},
	components:{
		gracePage
	}
}
</script>
<style>
</style>