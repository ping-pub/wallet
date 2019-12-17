<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Wallet Manage">
			<text style="padding: 12rpx 24rpx;" class="grace-black6 grace-icons icon-add2"></text>
		</PageTitle>

		<view slot="gBody" class="grace-body">
			<view class="grace-flex grace-flex-vcenter mb-12 mt-12">
				<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/cosmoshub.svg" mode=""></image>
				<view class="look-title-sm">
					Cosmos
				</view>
			</view>
			<view v-for="n in 3" :key="n" class="grace-comments-replay mb-12 grace-flex grace-flex-vcenter" style="display:flex;border-radius: 0;">
				<view class="flex-1">
					<view class=""> Address </view>
					<view class="grace-ellipsis">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
				</view>
				<view class="grace-icons icon-arrow-right"></view>
			</view>
			
			<view class="grace-flex grace-flex-vcenter mb-12">
				<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/kava.svg" mode=""></image>
				<view class="look-title-sm">
					Kava
				</view>
			</view>
			<view v-for="n in 6" :key="n" class="grace-comments-replay mb-12 grace-flex grace-flex-vcenter" style="display:flex;border-radius: 0;">
				<view class="flex-1">
					<view class=""> Address </view>
					<view class="grace-ellipsis">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
				</view>
				<view class="grace-icons icon-arrow-right"></view>
			</view>
		</view>
	</gracePage>
</template>
<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack()
			},
		}
	}
</script>
