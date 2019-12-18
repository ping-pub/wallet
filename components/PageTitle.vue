<template>
	<view class="grace-border-b grace-bg-white">
		<view class="status_bar"></view>
		<view class="grace-flex-vcenter grace-flex ">
			<text @tap="goBack" style="padding: 12rpx 24rpx;" :class="{ 'grace-black6 ': theme === 'dark', 'grace-white' : theme === 'light' }" class="grace-icons icon-arrow-left"></text>
			<text class="grace-black f-16" :class="{ 'grace-black': theme === 'dark', 'grace-white' : theme === 'light' }" style="padding: 12rpx 0;">{{ title }}</text>
			<text class="flex-1"></text>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				default: ''
			},
			theme: {
				default: 'dark'
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
</style>
