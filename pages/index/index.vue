<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body" style="padding-bottom:150rpx;">
			<view class="grace-h4 grace-bold" style="margin-top:80rpx;">关注更多大牛，更快进步~</view>
			<view class="grace-text-small grace-black6" style="margin-top:8px;">赶快看看下面的牛人，学习更多使用技巧吧</view>
			<!-- 关注列表 -->
			<view class="grace-img-card">
				<view class="item grace-box-shadow" v-for="(item, index) in concerns" :key="index">
					<view class="img">
						<image :src="item[0]" mode="widthFix"></image>
					</view>
					<view class="title">{{item[1]}}</view>
					<view class="grace-text-small grace-ellipsis grace-black9">{{item[2]}}</view>
					<view class="">
						<button type="primary" class="grace-button grace-concerns-button grace-icons icon-shoucang">Stake</button>
					</view>
				</view>
			</view>
		</view>
<!-- 		<view slot="gFooter" class="concerns-footer">
			<button type="primary" class="grace-button grace-icons icon-shoucang">一键关注</button>
		</view> -->
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
export default{
	data() {
		return {
			concerns:[
				['http://img5.imgtn.bdimg.com/it/u=2819669926,1214596723&fm=26&gp=0.jpg', '设计秀儿', '实力派设计大佬'],
				['http://img0.imgtn.bdimg.com/it/u=3582194852,1481557220&fm=26&gp=0.jpg', '十年久不遇', '20年架构经验'],
				['http://img3.imgtn.bdimg.com/it/u=2815906454,2337019799&fm=26&gp=0.jpg', '盗心贼', '阿里全栈大牛带你飞'],
				['http://img2.imgtn.bdimg.com/it/u=3056902114,653741992&fm=26&gp=0.jpg', '女程序员', '美女也写一手好代码'],
				['http://img1.imgtn.bdimg.com/it/u=4293603120,2455313591&fm=26&gp=0.jpg', '他乡联盟', '主攻摄影十几年'],
				['http://img4.imgtn.bdimg.com/it/u=1429010655,902968447&fm=26&gp=0.jpg', '李某某', '不会PHP的程序员不是好设计'],
			]
		}
	},
	components:{
		gracePage
	}
}
</script>
<style>
page{background:#F1F2F3;}
.grace-img-card{margin-top:30px; justify-content:center;}
.grace-img-card > .item{width:250rpx; margin:25rpx 20rpx; border-radius:8rpx; padding:30rpx; background-color:#FFFFFF; overflow:hidden; font-size:0; position:relative;}
.grace-img-card > .item > .img image{width:150rpx; height:150rpx; border-radius:100rpx;}
.grace-img-card > .item > .title{margin-top:8px; font-weight:bold;}
.grace-concerns-button{line-height:60rpx; height:60rpx; font-size:22rpx; margin-top:10px;}
.concerns-footer{padding:20rpx; background-color:#FFFFFF;}
.grace-icons::before{margin-right:5px;}
</style>