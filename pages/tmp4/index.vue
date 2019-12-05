<template>
	<view>
		<!-- 导航条 -->
		<graceHeader background="#FFFFFF" :isSeize="true">
			<view class="grace-header-body">
				<view class="icons grace-icons icon-arrow-left grace-black" @tap="goback"></view>
				<view class="grace-header-content grace-flex-center">
					<text class="grace-header-text grace-black">消息</text>
					<view class="my-icon icon-clean grace-black icon-clean-size grace-text-center" @tap="clearmsg"></view>
				</view>
				<!-- 功能按钮示例 根据实际情况 删改及完善 -->
				<view class="my-icon icon-rili grace-black" @tap="set"></view>
				<view class="my-icon icon-jiahao grace-black" @tap="set"></view>
			</view>
		</graceHeader>
		<!-- 提醒框 -->
		<view v-if="isShow" class="remind grace-margin grace-space-between grace-flex-vcenter grace-box-shadow">
			<view class="my-icon icon-cancel remind-cancel" @click="closeRemind"></view>
			<view class="remind-text">打开系统通知，物流优惠等消息不错过</view>
			<view class="remind-strat grace-white grace-center" @click="start()">开启</view>
		</view>
		<!-- 没有消息 -->
		<view style="margin-top:100rpx;" v-if="msgs == 'empty'">
			<graceEmpty text="暂无消息" :iconSize="60" :iconType="2" iconColor="#888888"></graceEmpty>
		</view>
		<!-- 消息内容 --> 
		<view v-if="msgs != 'empty'">
			<view class="message-body" v-for="(msgBody, index) in msgs" :key="index">
				<view class="message-body-title grace-flex grace-bold">
					<text class="my-icon message-body-title-icon" :class="[msgBody.icon]"></text>
					<text class="remind-text">{{msgBody.title}}</text>
				</view>
				<view class="grace-list">
					<view class="items" v-for="(msg, indexMsg) in msgBody.msgsList" :key="indexMsg" :data-msgid="msg.id" @tap="gotoinfo">
						<view class="icons grace-relative">
							<image :src="msg.img" mode="widthFix"></image>
							<view class="grace-badge grace-bg-red grace-badge-absolute" v-if="msg.msgnumber > 0 && msg.ispoint">{{msg.msgnumber}}</view>
							<view class="grace-badge-point" v-if="msg.msgnumber < 1 && msg.ispoint"></view>
						</view>
						<view class="body" :data-msgindex="index + ',' + indexMsg" @touchstart="msgtouchstart" @touchend="msgtouchend">
							<view class="title">{{msg.msgtitle}}<text>{{msg.time}}</text></view>
							<view class="desc grace-ellipsis">{{msg.msgcontent}}</view>
						</view>
						<view class="remove-btn" v-if="moveindex == index + ',' + indexMsg" @tap="removemsg" :data-remindex="index + ',' + indexMsg">删除</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import graceHeader from '../../graceUI/components/graceHeader.vue';
import graceEmpty from "../../graceUI/components/graceEmpty.vue";
export default {
	data(){
		return {
			isShow : false,
			moveX  : 0,
			moveindex : '',
			msgs : [
				{
					title : "最新消息",
					icon  : "icon-new",
					msgsList : [
						{
							id        : 10001,
							img       : 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882ce3900b7.png',
							ispoint   : true,
							msgnumber : 0,
							msgtitle  : "优惠促销",
							msgtime   : "昨天",
							msgcontent: "消息内容消息内容消息内容消息内容"
						},
						{
							id        : 10002,
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
					icon  : "icon-time",
					msgsList : [
						{
							id        : 10003,
							img       : 'https://fudezao.oss-cn-qingdao.aliyuncs.com/statics/uper/201909/23/5d882ce3900b7.png',
							ispoint   : true,
							msgnumber : 12,
							msgtitle  : "优惠促销",
							msgtime   : "昨天",
							msgcontent: "消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容"
						},
						{
							id        : 10004,
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
	onLoad(){
		this.remind();
	},
	methods:{
		remind : function(){
			try{
				this.isShow = uni.getStorageSync('remindShow') == '' ? true : false;
			}catch(e){}
		},
		closeRemind : function () {
			try{
				uni.setStorageSync('remindShow' , true);
				this.isShow = false;
			}catch(e){}
		},
		start : function(){
			// 自行完善
		},
		goback : function(){
			uni.showToast({title:"返回按钮", icon: "none"});
			uni.navigateBack({});
		},
		set : function(){
			uni.showToast({title:"功能按钮", icon: "none"});
		},
		// 清空消息
		clearmsg : function(){
			uni.showModal({
			    title: '提示',
			    content: '确定清空消息吗?',
			    success: (res)  => {
			        if (res.confirm) {
						// 此处连接 api 清空用户消息
			            this.msgs = 'empty';
			        }
			    }
			});
		},
		msgtouchstart : function(e){
			this.moveX = e.changedTouches[0].pageX;
		},
		msgtouchend : function(e){
			this.moveX = e.changedTouches[0].pageX - this.moveX;
			if(this.moveX < -50){
				this.moveindex = e.currentTarget.dataset.msgindex;
			}else{
				this.moveindex = '-';
			}
		},
		// 删除某条消息
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
						if(this.msgs.length < 1){this.msgs = 'empty';}
			        }
			    }
			});
		},
		gotoinfo : function (e) {
			var msgid = e.currentTarget.dataset.msgid;
			uni.navigateTo({ url:"../msginfo/msginfo?msgid="+msgid});
		}
	},
	components:{ graceHeader , graceEmpty}
}
</script>

<style>
@font-face { font-family: 'iconfont'; src:url('https://at.alicdn.com/t/font_1424500_zmtxk2kxojo.ttf') format('truetype')}
.my-icon{font-family:"iconfont" !important; font-size:35rpx; font-style:normal;color:#3D3D3D;margin-right:10rpx;}
.icon-clean-size{padding:6rpx 8rpx;border-radius:30rpx;background:#E5E5E5;font-size:24rpx;}
.icon-cancel:before{content:"\e641";}
.icon-new:before{content:"\e76a";} 
.icon-time:before{content:"\e698";}
.icon-rili:before{content:"\e60a";}
.icon-clean:before{content:"\e629";}
.icon-jiahao:before{content:"\e61a";}

page{background:#F5F5F5;}
.message-body{width:650rpx; margin:0 25rpx; margin-top:25rpx; padding:0 25rpx; background:#FFFFFF; border-radius:20rpx;}
.remind{background:#FFFFFF; height:80rpx; line-height:80rpx; overflow:hidden; border-radius:10rpx; margin-top:20rpx; padding:0 20rpx;}
.remind-cancel{font-size:28rpx; width:60rpx; flex-shrink:0; text-align:center; line-height:80rpx;}
.remind-text{margin-right:auto; width:700rpx; height:80rpx; line-height:80rpx; margin:0 20rpx; font-size:28rpx; overflow:hidden;}
.remind-strat{background:linear-gradient(to right,#EC3332,#F96B00); height:55rpx; width:95rpx; margin-right:15rpx; line-height:55rpx; border-radius:28rpx;flex-shrink:0; font-size:26rpx;}

.message-body-title{height:60rpx;margin-top:10rpx;line-height:80rpx;color:#9B9EA3;}
.message-body-title-icon{height:60rpx;width:50rpx;color:#9B9EA3;}

.grace-list .body{overflow:hidden;}
.grace-list .items{height:132rpx; overflow:hidden;}
.grace-list .items .icons image{width:80rpx; height:80rpx; border-radius:10rpx;}
.grace-list .items .icons{overflow:visible;}
.grace-list .items .desc{height:40rpx; line-height:40rpx;}
.grace-badge-point{right:-5rpx; top:-10rpx; z-index:1; background:#F92C2F;}
.grace-badge-absolute{background:#F92C2F; color:#FFF; right:-5rpx!important; top:-10rpx!important;}

.grace-list .items .remove-btn{width:0rpx; height:128rpx; margin-left:20rpx; background-color:#FF0000; text-align:center; line-height:128rpx; color:#FFFFFF; font-size:30rpx; flex-shrink:0; animation:100ms showRemove linear forwards;}
@keyframes showRemove{from {width: 0;} to {width:150rpx;}}
</style>