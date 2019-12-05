<template name="graceLoading">
	<view class="grace-loading grace-ellipsis" v-if="loadingType < 5 && show">
		<view class="grace-loading-icon" v-if="loadingType === 1" :style="{color:iconColor}"></view>
		<text :style="{color:textColor}">{{loadingText[loadingType]}}</text>
	</view>
</template>
<script>
export default {
	props: {
		loadingType: {
			type : Number,
			default: 0
		},
		loadingText : {
			type  : Array,
			default : function () {
				return ["上拉加载更多", "加载中...", "已经加载全部数据"];
			}
		},
		show : {
		  type : Boolean,
		  default : true
		},
		iconColor : {
			type : String,
			default : "#888888"
		},
		textColor : {
			type : String,
			default : "#888888"
		}
	}
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1348684_f1lellt295.ttf') format('truetype');}
@keyframes grace-rotate360{0%{transform:rotate(0deg);} 50%{transform:rotate(180deg);} 100%{transform:rotate(360deg);}}
.grace-loading{display:flex; width:100%; justify-content:center; padding:16rpx 0; padding-bottom:36rpx; line-height:40rpx; color:#888;}
.grace-loading text{margin-left:12rpx;}
.grace-loading-icon{width:40rpx; height:40rpx; justify-content:center; line-height:40rpx; font-size:30rpx; text-align:center; font-family:"gFont" !important; animation:grace-rotate360 1200ms infinite linear;}
.grace-loading-icon:before {content:"\e6c4";}
</style>