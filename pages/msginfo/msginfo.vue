<template>
	<view>
		<!-- 导航条 -->
		<graceHeader background="#FFFFFF" :isSeize="true">
			<view class="grace-header-body">
				<view class="icons grace-icons icon-arrow-left grace-black" @tap="goback"></view>
				<view class="grace-header-content grace-flex-center">
					<text class="grace-header-text grace-black">{{pagetitle}}</text>
				</view>
				<view class="my-icon icon-set grace-black" @tap="set"></view>
			</view>
		</graceHeader>
		<view v-for="(item,index) in msgs" :key="index">
			<!-- 时间 -->
			<view class="time grace-flex-center grace-flex-vcenter"><text class="grace-white">{{item.time}}</text></view>
			<!-- 内容主体 -->
			<view class="message-body" v-for="(msg,indexMsg) in item.content" :key="indexMsg">
				<view class="message-body-title grace-bold">{{msg.status}}</view>
				<view class="grace-news-list">
					<view class="item">
						<view class="img img-l"><image :src="msg.img" mode="widthFix"></image></view>
						<view class="body grace-flex-center grace-flex-vcenter"><view class="title">{{msg.msgcontent}}</view></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import graceHeader from '../../graceUI/components/graceHeader.vue';
export default {
	data(){
		return {
			isShow : false,
			pagetitle : '优惠促销',
			msgs : [
				{
					time : "10:13",
					content :[
						{
							status	   : '您的订单已发货',
							img        : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4146488932,705679890&fm=26&gp=0.jpg',
							msgcontent : "订单[贵州茅台酒 飞天茅台53度]运送中，正在快马加鞭赶往下一站，点击查看详情 >>"
						},
						{
							status	   : '您的订单已配送',
							img        : 'https://img10.360buyimg.com/n7/jfs/t1/55966/15/10399/243915/5d789b47E494ae21b/0c3c348f42b20daa.jpg',
							msgcontent : "订单[华硕（ASUS）ROG-STRIX-RTX2080S]已配送完成，期待您分享商品使用心得，完成后可获得奖励，点击评价 >>"
						}
					]
				},
				{
					time : "2019年09月04日 12:44",
					content :[
						{
							status	   : '您的订单已完成',
							img        : 'https://img11.360buyimg.com/n7/jfs/t21817/85/1683800813/726302/9504d8c8/5b305b6bN6ffa447b.png',
							msgcontent : "订单[雷蛇（Razer）笔记本显卡拓展坞]运送中，正在快马加鞭赶往下一站，点击查看详情 >>"
						}
					]
				},
			]
		}
	},
	methods:{
		goback : function(){uni.navigateBack({});},
		set : function(){uni.navigateTo({url : '../msgset/msgset'})}
	},
	components:{ graceHeader }
}
</script>

<style>
@font-face { font-family: 'iconfont'; src:url('https://at.alicdn.com/t/font_1424500_r9c2reqn2f.ttf') format('truetype')}
.my-icon{font-family:"iconfont" !important; font-size:40rpx; font-style:normal;color:#474851;margin-right:20rpx;}
.icon-set:before{content:"\e64c";}

page{background:#EBEBEB;}
.message-body{width:650rpx; margin:0 25rpx;margin-top:15rpx;padding:0 25rpx;background:#FFFFFF;border-radius:20rpx;}

.time{width:750rpx;height:60rpx; margin-top:15rpx;}
.time text{padding:10rpx 20rpx; background:#DFDFDF; border-radius:30rpx; font-size:22rpx;}

.message-body-title{height:80rpx; line-height:80rpx;}
.grace-news-list .item .img{width:120rpx; height:120rpx;}
.grace-news-list .item .body .title{font-size:26rpx; margin-top:0rpx; color:#676767;}
</style>