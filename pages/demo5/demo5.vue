<template>
	<view>
		<gracePage headerBG="#55D6BA" statusBarBG="#55D6BA">
			<!-- 自定义头部导航  -->
			<view class="grace-header-body" slot="gHeader">
				<text class="grace-header-icons grace-icons icon-arrow-left grace-white" @tap.stop="goback"></text>
				<view class="grace-header-content">
					<text class="grace-header-text grace-ellipsis grace-white">自定义头部导航，放什么内容您自己来~</text>
				</view>
				<text class="grace-header-icons grace-icons icon-set grace-white" style="font-size:22px;" @tap.stop="setfun"></text>
			</view>
			<!-- 页面主体 -->
			<view class="grace-body" slot="gBody">
				<view class="grace-text grace-text-center grace-margin-top">
					<text>主体内容区域</text>
				</view>
			</view>
			<!-- 底部功能 -->
			<view slot="gFooter">
				<view class="grace-footer">
					<view class="submit-commnets">
						<view class="icons grace-icons icon-write"></view>
						<input type="text" placeholder="说点什么吧 ..." v-model="commentContent" value="" />
					</view>
					<view class="submit-btn">发表</view>
				</view>
			</view>
		</gracePage>
	</view>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue"
export default {
	data() {
		return {
			commentContent : ''
		}
	},
	methods:{
		goback : function () {
			uni.navigateBack({});
		},
		setfun : function () {
			uni.showToast({title:"您点击了设置按钮", icon:"none"});
		}
	},
	components:{
		gracePage
	}
}
</script>
<style>
.grace-footer{height:36px; padding:5px 0; display:flex; flex-wrap:nowrap; position:relative;}
.grace-footer .submit-commnets{display:flex; width:100%; margin-left:16px; margin-right:6px; flex-wrap:nowrap; background:#F8F8F8; border-radius:36px; padding:0 15px;}
.grace-footer .submit-commnets .icons{width:36px; height:36px; font-size:18px; line-height:36px; text-align:center; flex-shrink:0;}
.grace-footer .submit-commnets input{width:100%; height:36px; line-height:36px; background:none; font-size:14px; margin:0 5px;}
.grace-footer .submit-btn{display:inline-block; padding:0 12px; line-height:36px; color:#3688FF; flex-shrink:0; margin-right:5px;}
</style>