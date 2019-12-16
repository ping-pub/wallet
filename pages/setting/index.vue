<template>
	<gracePage :customHeader="false">
		<view slot="gBody">
			<view class="status_bar"></view>
			<view class="grace-body" style="margin-top: 32rpx;margin-bottom: 24rpx;">
				<text class="look-title">Setting</text>
			</view>
			<view class="grace-ucenter-funs grace-list">
				<navigator url="/pages/settingWallet/index" class="grace-body items">
					<view class="look-app-icon look-app-icon-wallet grace-black9 " style="font-size: 18px;"></view>
					<view class="body">
						<view class="title">Switch Chain</view>
					</view>
					<view class="grace-black9">
						Cosmos
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="grace-body items" url="/pages/settingServer/index">
					<view class="look-app-icon look-app-icon-ip grace-black9" style="font-size: 20px;padding-left:8rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.serverHost }}</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
			</view>
			
			<view style="background: #f6f6f6;height: 24rpx;"></view>
			
			<view class="grace-ucenter-funs grace-list">
				<navigator url="/pages/settingWallet/index" class="grace-body items">
					<view class="look-app-icon look-app-icon-wallet grace-black9 " style="font-size: 18px;"></view>
					<view class="body">
						<view class="title">{{ lang.manageWallet }}</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator url="/pages/settingAddress/index" class="grace-body items">
					<view class="look-app-icon look-app-icon-book grace-black9" style="font-size: 24px;padding-left: 2rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.addressBook }}</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
			</view>
			<view style="background: #f6f6f6;height: 24rpx;"></view>
			
			<view class="grace-ucenter-funs grace-list">
	
				<navigator class="grace-body items" url="/pages/settingLanguage/index">
					<view class="look-app-icon look-app-icon-language grace-black9 " style="font-size: 26px;padding-left: 2rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.language }}</view>
					</view>
					<view class="grace-black9">
						English
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="grace-body items" url="/pages/settingCurrency/index">
					<view class="look-app-icon look-app-icon-language grace-black9 " style="font-size: 26px;padding-left: 2rpx;"></view>
					<view class="body">
						<view class="title">Currency</view>
					</view>
					<view class="grace-black9">
						USD
					</view>
					<view class="arrow-right"></view>
				</navigator>
			</view>
		</view>
	</gracePage>
</template>
<script>
	export default {
		computed: {
			lang() {
				return this.$t('setting')
			}
		}
	}
</script>

<style scoped>
	.list-title {
		padding: 6rpx 12rpx;
	}
</style>
