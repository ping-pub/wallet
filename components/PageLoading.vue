<template>
	<view class="loading-modal cu-load load-modal" v-if="loading">
		<view class="text-lg text-white text-bold" style="margin-top: 40rpx;">
			Ping Wallet
		</view>
		<view class="text-white" style="font-size: 12px;">{{lang.text}}...</view>
	</view>
</template>

<script>
	export default {
		computed: {
			lang() {
				return this.$t('loading');
			}
		},
		props: {
			loading: {
				default: false
			}
		}
	}
</script>

<style>
.loading-modal.cu-load.load-modal::after {
	border-left: 3px solid #333;
}
.loading-modal.cu-load.load-modal {
	height: 200rpx;
	width: 200rpx;
	border-radius: 100%;
	background-color: transparent;
	box-shadow: none;
}
.loading-modal.cu-load.load-modal::after {
	    background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
}
</style>