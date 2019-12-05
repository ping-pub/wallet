<template>
	<view class="grace-box-banner grace-border-radius-small" style="margin:10px 0;">
	    <view class="garce-items" v-for="(item, index) in items" :key="index">
	        <view class="line1">{{item[0]}}<text>{{item[1]}}</text></view>
	        <view class="line2">{{item[2]}}</view>
	    </view>
	</view>
</template>
<script>
export default {
	props: {
		items:{
			type : Array,
			default : function () {
				return []
			}
		}
	}
}
</script>
<style>
.grace-box-banner{padding:26rpx 0; display:flex; flex-wrap:nowrap; overflow:hidden; background:#FFF;}
.grace-box-banner > .garce-items{width:100%; border-right:1px solid #F1F2F3; justify-content:center; line-height:1.5em; text-align:center;}
.grace-box-banner > .garce-items:last-child{border:none;}
.grace-box-banner .line1{font-size:36rpx; line-height:60rpx; overflow:hidden; text-align:center;}
.grace-box-banner .line1 text{font-size:24rpx; color:#999999; line-height:65rpx; margin-left:8rpx;}
.grace-box-banner .line2{font-size:24rpx; color:#999999; line-height:32rpx; text-align:center;}
</style>