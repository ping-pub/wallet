<template>
	<view class="grace-editor-show">
		<block v-for="(item, index) in article" :key="index">
			<view v-if="item.type == 'txt'" class="item"><text class="text">{{item.content}}</text></view>
			<view class="item grace-flex grace-flex-center" v-else-if="item.type == 'center'">
				<view class="center-title">{{item.content}}</view>
			</view>
			<view class="imgs" v-else-if="item.type == 'img'">
				<image :src="item.content" :data-url="item.content" @tap="showImgs" mode="widthFix"></image>
			</view>
			<view class="item" v-else-if="item.type == 'quote' || item.type == 'pre'">
				<view class="quote"><text>{{item.content}}</text></view> 
			</view>
			<view class="item" v-else-if="item.type == 'strong'">
				<text class="strong">{{item.content}}</text>
			</view>
			<view class="item" v-else-if="item.type == 'link'">
				<graceLink :url="item.content" :title="item.content"></graceLink>
			</view>
			<view class="item spline" v-else-if="item.type == 'spline'">● ● ●</view>
		</block>
	</view>
</template>
<script>
import graceLink from "../../graceUI/components/graceLink.vue";
export default{
	props:{
		article:{
			type : Array,
			default : function(){return new Array();}
		}
	},
	components:{
		graceLink
	},
	methods: {
		showImgs:function(e){
			var currentUrl = e.currentTarget.dataset.url;
			var imgs       = [];
			var items      = this.article;
			for(let i = 0; i < items.length; i++){
				if(items[i].type ==  'img'){
					imgs.push(items[i].content);
				}
			}
			uni.previewImage({
				urls:imgs,
				current:currentUrl
			})
		}
	}
}
</script>
<style scoped>
.grace-editor-show{padding:0 25rpx; margin-top:20rpx;}
.grace-editor-show .item{width:100%; line-height:1.8em; letter-spacing:1px;}
.grace-editor-show .item .txt{line-height:2.2em; font-size:26rpx;  color:#676767;}
.grace-editor-show .imgs{margin:20rpx 0; font-size:0; overflow:hidden;}
.grace-editor-show .imgs image{width:100%;}
.grace-editor-show .quote{border:none; margin:20rpx 0; width:92%; color:#333333; background:#F8F8F8; line-height:1.6em; font-size:24rpx; padding:20rpx 4%;}
.grace-editor-show .strong{font-weight:600; width:100%; border:none; font-size:30rpx; line-height:60rpx; margin-top:30rpx; padding:5px 0; color:#3D3D3D;}
.grace-editor-show .spline{padding:10px 0; text-align:center; color:#8788A3; font-size:20rpx; opacity:0.3;}
.grace-editor-show .center{width:200rpx; text-align:center; border:none; font-size:28rpx; color:#333333; line-height:60rpx; padding:5px 18px; border-bottom:2px solid #C1C1C1; font-weight:600;}
.grace-editor-show .center-title{text-align:center; border:none; font-size:28rpx; line-height:60rpx; color:#333333; padding:10px 0; border-bottom:2px solid #F4F5F6; font-weight:600; display:inline-block;}
.grace-editor-show .link{line-height:32rpx; padding:5px 0; color:#007AFF;}
</style>
