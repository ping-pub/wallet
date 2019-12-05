<template>
	<gracePage headerBG="#F5F6F8" :headerHeight="0">
		<!-- 页面主体 -->
		<view slot="gBody" class="demo_body">
			<view class="demo">
				<image src="https://graceui.oss-cn-beijing.aliyuncs.com/demo2.1/logo2.png" class="index_logo" mode="widthFix"></image>
			</view>
			<view class="demo">
				<text class="grace-text-small grace-black9">兼容uni-app及微信小程序的优秀前端框架\n</text>
				<text class="grace-text-small grace-black9">本页演示 : \n</text>
				<text class="grace-text-small grace-black9">开启自定义导航 + 处理沉浸式</text>
			</view>
			<view class="demo">
				<text class="grace-title">其他情况演示</text>
				<text class="grace-text grace-blue" @tap="goto(1);">1. 使用原生头部导航\n</text>
				<text class="grace-text grace-blue" @tap="goto(2);">2. 使用自定义头部导航\n</text>
				<text class="grace-text grace-blue" @tap="goto(3);">3. 使用底部自定义导航\n</text>
				<text class="grace-text grace-blue" @tap="goto(4);">4. 使用悬浮挂件\n</text>
				<text class="grace-text grace-blue" @tap="goto(5);">5. 兼容 IOS 键盘\n</text>
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
		goto : function (id) {
			uni.navigateTo({
				url:"../demo"+id+"/demo"+id
			})
		}
	},
	components:{
		gracePage
	}
}
</script>
<style>
</style>