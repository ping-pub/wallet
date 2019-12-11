<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody">
			<!-- 消息为空 -->
			<graceEmpty v-if="msgs.length < 1">
				<view slot="img" class="empty-view">
					<!-- 请根据您的项目要求制作并更换为空图片 -->
					<image class="empty-img" mode="widthFix" src="https://staticimgs.oss-cn-beijing.aliyuncs.com/empty.png"></image>
				</view>
				<text slot="text" class="grace-text-small grace-gray">暂无任何消息</text>
			</graceEmpty>
			<!-- 消息列表 滑动列表 -->
			<view class="grace-body grace-bg-white" v-for="(msgBody,index) in msgs" :key="index">
				<view>
					<text class="grace-title">{{msgBody.title}}</text>
				</view>
				<view class="grace-list">
					<view class="grace-list-items" v-for="(msg, indexMsg) in msgBody.msgsList" :key="indexMsg">
						<view class="grace-list-image grace-relative">
							<image class="grace-list-image" :src="msg.img" mode="widthFix"></image>
							<text class="grace-badge grace-bg-red grace-badge-absolute" v-if="msg.msgnumber > 0">{{msg.msgnumber}}</text>
						</view>
						<view 
						class="grace-list-body" :data-msgindex="index + ',' + indexMsg" 
						@touchstart="msgtouchstart" @touchend="msgtouchend" @touchmove="msgtouchmove">
							<view class="grace-list-title">
								<text class="grace-list-title-text">{{msg.msgtitle}}</text>
								<text class="grace-list-title-desc">{{msg.msgtime}}</text>
							</view>
							<view class="grace-list-body-desc grace-ellipsis">
								{{msg.msgcontent}}
							</view>
						</view>
						<view class="grace-fun-btn" :style="{width:funBtnsWidthShow+'px'}" v-if="moveindex == index + ',' + indexMsg">
							<text class="grace-fun-btns grace-bg-blue" @tap.stop="readedmsg" :data-remindex="index + ',' + indexMsg" v-if="msg.msgnumber > 0">已读</text>
							<text class="grace-fun-btns" @tap.stop="removemsg" :data-remindex="index + ',' + indexMsg">删除</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceEmpty from "../../graceUI/components/graceEmptyNew.vue";
export default {
	data() {
		return {
			//功能按钮总宽度
			funBtnsWidth : 130,
			funBtnsWidthShow : 0,
			moveStart  : 0,
			moveindex : '',
			msgs : [
				{
					title : "最新消息",
					msgsList : [
						{
							img       : 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882ce3900b7.png',
							ispoint   : true,
							msgnumber : 0,
							msgtitle  : "优惠促销",
							msgtime   : "昨天",
							msgcontent: "消息内容消息内容消息内容消息内容"
						},
						{
							img       : 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882db43842c.png',
							ispoint   : true,
							msgnumber : 0,
							msgtitle  : "账户通知",
							msgtime   : "2019-08-11",
							msgcontent: "您的账户入账 *** 元"
						}
					 ]
				},
				{
					title : "两周前的消息",
					msgsList : [
						{
							img       : 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882ce3900b7.png',
							ispoint   : true,
							msgnumber : 12,
							msgtitle  : "优惠促销",
							msgtime   : "昨天",
							msgcontent: "消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容"
						},
						{
							img       : 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882db43842c.png',
							ispoint   : true,
							msgnumber : 0,
							msgtitle  : "账户通知",
							msgtime   : "2019-08-11",
							msgcontent: "您的账户入账 *** 元"
						}
					 ]
				}
			]
		}
	},
	onLoad:function(){},
	methods:{
		msgtouchstart : function(e){
			this.moveindex = e.currentTarget.dataset.msgindex;
			this.moveStart = e.changedTouches[0].pageX;
		},
		msgtouchend : function(e){
			if(this.funBtnsWidthShow > 0){
				this.funBtnsWidthShow = this.funBtnsWidth;
			}else{
				this.moveindex = '-';
			}
		},
		msgtouchmove : function(e){
			var moveX = e.changedTouches[0].pageX - this.moveStart;
			if(moveX < 0){
				moveX = moveX * -1;
				if(moveX > this.funBtnsWidth){
					moveX = this.funBtnsWidth;
				}
				this.funBtnsWidthShow = moveX;
			}else{
				this.funBtnsWidthShow = 0;
			}
		},
		removemsg : function (e) {
			var removeindex = e.currentTarget.dataset.remindex;
			removeindex = removeindex.split(',');
			uni.showModal({
				title: '提示',
				content: '确定删除消息吗?',
				success: (res)  => {
					if (res.confirm) {
						this.msgs[removeindex[0]].msgsList.splice(removeindex[1],1);
						this.moveindex = '-';
						// 如果当前消息组已经没有消息则删除整个组
						if(this.msgs[removeindex[0]].msgsList.length < 1){
							this.msgs.splice(removeindex[0], 1);
						}
						// 如果消息为空
						if(this.msgs.length < 1){this.msgs = [];}
					}
				}
			});
		},
		readedmsg : function (e) {
			var index = e.currentTarget.dataset.remindex;
			index = index.split(',');
			this.msgs[index[0]].msgsList[index[1]].msgnumber = 0;
			this.moveindex = '-';
		}
	},
	components:{
		gracePage, graceEmpty
	}
}
</script>
<style>
page{background-color:#F8F8F8;}
.empty-view{width:280rpx; height:280rpx; border-radius:280rpx; background-color:#F6F7F8; margin-top:300rpx;}
.empty-img{width:220rpx; height:200rpx; margin:40rpx; border-radius:200rpx;}
.grace-text-small{margin-top:10px;}
.grace-body{padding:15rpx 25rpx;}
.grace-list-body-desc{line-height:40rpx; height:40rpx;}
.grace-fun-btn{width:150px; display:flex; flex-direction:row; flex-wrap:nowrap; margin-left:20rpx;}
.grace-fun-btns{display:block; width:150px; text-align:center; line-height:110rpx; background-color:#FF0036; color:#FFFFFF; font-size:28rpx; height:110rpx; overflow:hidden;}
</style>