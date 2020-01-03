<template>
	<view class="loading-modal cu-load load-modal" v-if="loading">
		<view class="text-lg text-gray" style="margin-top: 40rpx;">
			Ping Wallet
		</view>
		<view class="text-gray" style="font-size: 12px;">加载中...</view>
	</view>
</template>

<script>
	export default {
		props: {
			loading: {
				default: false
			}
		}
	}
</script>

<style>
</style>
