<template>
	<gracePage :customHeader="false">
		<view slot="gBody">
			<view class="grace-ucenter-funs grace-list">
				<navigator url="/pages/settingWallet/index" class="items">
					<view class="look-app-icon look-app-icon-wallet grace-black9 " style="font-size: 18px;padding-left: 24rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.manageWallet }}</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator url="/pages/settingAddress/index" class="items">
					<view class="look-app-icon look-app-icon-book grace-black9" style="font-size: 24px;padding-left: 26rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.addressBook }}</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="items" url="/pages/settingLanguage/index">
					<view class="look-app-icon look-app-icon-language grace-black9 " style="font-size: 26px;padding-left: 26rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.language }}</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="items" url="/pages/settingServer/index">
					<view class="look-app-icon look-app-icon-ip grace-black9" style="font-size: 20px;padding-left: 32rpx;"></view>
					<view class="body">
						<view class="title">{{ lang.serverHost }}</view>
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
