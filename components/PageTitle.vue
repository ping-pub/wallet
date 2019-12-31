<template>
	<view class="grace-border-b grace-bg-white">
		<view class="cu-bar bg-white">
			<view class="action" @tap="goBack">
				<text class="cuIcon-back text-gray" style="font-size: 14px;"></text>
			</view>
			<view class="content text-bold">
				{{ title }}
			</view>
			<view class="action">
				<slot></slot>
			</view>
		</view>
		<PageToast :show="toast" :msg="msg"></PageToast>
	</view>
</template>

<script>

	export default {
		props: {
			toast: {
				default: false
			},
			msg: {
				default: ''
			},
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
