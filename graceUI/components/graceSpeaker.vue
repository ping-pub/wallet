<template name="graceSpeaker">
	<view class="grace-swiper-msg">
		<view class="grace-swiper-msg-icon" :class="[iconClass]" :style="{color:iconColor}"></view>
		<swiper :vertical="vertical" autoplay="true" circular="true" :interval="interval">
			<swiper-item v-for="(item, index) in msgs" :key="index">
				<navigator :url="item.url" :open-type="item.opentype" :style="{fontSize:fontSize, fontWeight:fontWeight}">{{item.title}}</navigator>
			</swiper-item>
	  </swiper>
	</view>
</template>
<script>
export default {
	name: "graceSpeaker",
	props: {
		msgs : {
		  type  : Array,
		  default : function(){return [];}
		},
		iconClass : {
		  type  : String,
		  default : ""
		},
			iconColor : {
			  type  : String,
			  default : "#3688FF"
			},
		interval : {
		  type : Number,
		  default: 3000
		},
		vertical : {
		  type : Boolean,
		  default : true
		},
		fontSize : {
			type  : String,
			default : "26rpx"
		},
		fontWeight : {
			type  : String,
			default : ""
		}
	}
}
</script>
<style>
.grace-swiper-msg{width:100%; padding:10rpx 0; display:flex; flex-wrap:nowrap;}
.grace-swiper-msg-icon{height:60rpx; line-height:60rpx; margin-right:16rpx; display:inline-block; flex-shrink:0;}
.grace-swiper-msg swiper{width:100%; height:60rpx; overflow:hidden;}
.grace-swiper-msg swiper-item{line-height:60rpx; height:60rpx; overflow:hidden;}
.grace-swiper-msg navigator{line-height:60rpx; height:60rpx; overflow:hidden;}
</style>