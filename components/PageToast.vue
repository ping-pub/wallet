<template>
	<view class="pagetoast-wrap" v-if="show">
		<view class="pagetoast-content">
			<text class="cuIcon-notice mr-6 text-grey"></text>
			<text class="pagetoast-content-text text-grey">{{msg}}</text>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			msg: {
				type: String,
				default: ""
			},
			show: {
				type: Boolean,
				default: true
			}
		}
	}
</script>
<style scoped>
	.pagetoast-wrap {
		position: fixed;
		bottom: 80rpx;
		z-index: 9999;
		padding: 0 30rpx;
		width: 100%;
	}

	.pagetoast-content {
		padding: 18rpx 20rpx;
		border-radius: 50rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 16rpx #D5D6D8;
		margin: 0 auto;
		width: fit-content;
	}

	.pagetoast-content-text {
		line-height: 36rpx;
		height: 36rpx;
	}
</style>
