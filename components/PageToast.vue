<template>
	<view class="grace-fixed-msg" :style="{width:width+'rpx', bottom:bottom+'rpx'}" v-if="show">
		<text class="grace-fixed-msg-icon grace-icons msg-icon" :style="{color:color}"></text>
		<text class="grace-fixed-msg-text" :style="{color:color}">{{msg}}</text>
	</view>
</template>
<script>
	export default {
		props: {
			msg: {
				type: String,
				default: ""
			},
			color: {
				type: String,
				default: "#666"
			},
			width: {
				type: Number,
				default: 300
			},
			bottom: {
				type: Number,
				default: 80
			},
			show: {
				type: Boolean,
				default: true
			}
		}
	}
</script>
<style scoped>
	.grace-fixed-msg {
		width: 300rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 18rpx 20rpx;
		border-radius: 50rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 16rpx #D5D6D8;
		position: fixed;
		bottom: 60rpx;
		left: 50%;
		transform: translateX(-50%);
		z-index: 9999;
	}

	.grace-fixed-msg-icon {
		width: 36rpx;
		height: 36rpx;
		line-height: 36rpx;
		font-size: 30rpx;
		color: #3688FF;
		flex-shrink: 0;
		opacity: 0.6;
		text-align: center;
	}

	.msg-icon:before {
		content: "\e666";
	}

	.grace-fixed-msg-text {
		width: 500rpx;
		line-height: 36rpx;
		font-size: 28rpx;
		color: #008CFF;
		height: 36rpx;
		text-align: center;
		overflow: hidden;
	}
</style>
