<template>
	<gracePage headerBG="#F5F6F8" :headerHeight="0">
		<!-- 页面主体 -->
		<view slot="gBody" class="demo_body">
			<view class="demo">
				<image src="https://graceui.oss-cn-beijing.aliyuncs.com/demo2.1/logo2.png" class="index_logo" mode="widthFix"></image>
			</view>
			<view class="demo">
				<text class="grace-text-small grace-black9">兼容uni-app及微信小程序的优秀前端框架\n</text>
				<text class="grace-text-small grace-black9">您看到的是 "关于" 页面~ 您已成功部署 GraceUI 请开始编写您的代码</text>
			</view>
			<view class="demo">
				<graceFlex :classes="['nowrap', 'ycenter']">
					<text class="grace-text-small grace-black9" style="margin-right:10rpx;">官网 : </text>
					<graceLink url="http://grace.hcoder.net" title="http://grace.hcoder.net"></graceLink>
				</graceFlex>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceFlex from "../../graceUI/components/graceFlex.vue";
import graceLink from "../../graceUI/components/graceLink.vue";
export default {
	data() {
		return {
			
		}
	},
	methods:{
		
	},
	components:{
		gracePage, graceFlex , graceLink
	}
}
</script>
<style>
.demo_body{padding:200rpx 138rpx;}
.index_logo{width:320rpx; height:52rpx; margin-top:188rpx;}
.demo{width:100%; margin-top:20rpx;}
</style>