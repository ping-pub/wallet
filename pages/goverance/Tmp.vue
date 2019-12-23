<template>
	<gracePage :customHeader="false">
		<view slot="gBody">
			<!-- 上层 -->
			<view class="help-menu grace-wrap grace-flex-center">
				<view class="help-text grace-body" style="padding-top: 48rpx;">Setting</view>
				<view class="help-menu-list grace-body grace-box-shadow">
					<view class="grace-grids grace-margin-top">
						<view class="items">
							<view class="icon" style="background:#3DDFC7;">
								<text class="my-icon icon-wenhao"></text>
							</view>
							<view class="text">立即提问</view>
						</view>
						<view class="items">
							<view class="icon" style="background:#419EF8;">
								<text class="my-icon icon-wenti"></text>
							</view>
							<view class="text">我的问题</view>
						</view>
						<view class="items">
							<view class="icon" style="background:#FDCE4C;">
								<text class="my-icon icon-phone"></text>
							</view>
							<view class="text">咨询电话</view>
						</view>
						<view class="items">
							<view class="icon" style="background:#FD5C74;">
								<text class="my-icon icon-kefu"></text>
							</view>
							<view class="text">在线客服</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 下层 -->
			<view class="help-list">
		<!-- 		<view class="grace-title">
					<text class="title">常见问题</text>
					<navigator class="grace-more">更多<text class="grace-icons icon-arrow-right"></text></navigator>
				</view> -->
				
				<view class="grace-ucenter-funs grace-list">
					<navigator url="/pages/walletManage/index" class="grace-body items">
						<view class="look-app-icon look-app-icon-wallet" style="font-size: 18px;color:#586d8b"></view>
						<view class="body">
							<view class="title">{{ lang.manageWallet }}</view>
						</view>
						<view class="arrow-right"></view>
					</navigator>
					<navigator class="grace-body items" url="/pages/settingServer/index">
						<view class="look-app-icon look-app-icon-ip " style="font-size: 20px;padding-left:8rpx;color: #586d8b"></view>
						<view class="body">
							<view class="title">{{ lang.serverHost }}</view>
						</view>
						<view class="arrow-right"></view>
					</navigator>
				</view>
				<view class="page-space"></view>
				
				<view class="grace-ucenter-funs grace-list">
					<navigator class="grace-body items" url="/pages/settingLanguage/index">
						<view class="look-app-icon look-app-icon-language" style="font-size: 26px;padding-left: 2rpx;color: #586d8b"></view>
						<view class="body">
							<view class="title">{{ lang.language }}</view>
						</view>
						<view class="grace-black9">
							English
						</view>
						<view class="arrow-right"></view>
					</navigator>
					<navigator class="grace-body items" url="/pages/settingCurrency/index">
						<view class="look-app-icon look-app-icon-money" style="padding-left: 10rpx;color: #586d8b"></view>
						<view class="body">
							<view class="title">Currency</view>
						</view>
						<view class="grace-black9">
							USD
						</view>
						<view class="arrow-right"></view>
					</navigator>
					<view @tap="openBrowser('https://look.ping.pub')" class="grace-body items">
						<view class="look-app-icon look-app-icon-browser" style="font-size: 20px;padding-left: 8rpx;color:#586d8b"></view>
						<view class="body">
							<view class="title">{{ lang.browser }}</view>
						</view>
						<view class="grace-black9">
							https://look.ping.pub
						</view>
						<view class="arrow-right"></view>
					</view>
				</view>
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
		},
		methods: {
			openBrowser(url) {
				// #ifdef APP-PLUS
				plus.runtime.openURL(url)
				// #endif 
				// #ifdef H5
				window.open(url, '_self')
				// #endif
		
			},
		},
		data() {
			return {}
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#36DBC6'
			})
		}
	}
</script>
<style>
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_1424500_og7nfgix52d.ttf') format('truetype')
	}

	.my-icon {
		font-family: "iconfont" !important;
		font-size: 50rpx !important;
		font-style: normal;
		color: #FFFFFF;
	}

	.grace-grids .text {
		margin-top: 18rpx;
	}

	.grace-grids .icon {
		border-radius: 50rpx;
	}

	.icon-kefu:before {
		content: "\e610";
	}

	.icon-phone:before {
		content: "\e62c";
	}

	.icon-wenti:before {
		content: "\e60d";
	}

	.icon-wenhao:before {
		content: "\e63c";
	}

	page {
		background: #fff;
	}

	.help-menu {
		height: 250rpx;
		background: linear-gradient(top, #37434b, #212452);
		border-radius: 0 0 50rpx 50rpx;
	}

	.help-menu-list {
		background: #FFFFFF !important;
		margin-top: 50rpx !important;
		border-radius: 20rpx;
		padding-bottom: 20rpx;
	}

	.help-text {
		height: 50rpx;
		font-size: 44rpx;
		color: #FFFFFF;
		letter-spacing: 4rpx;
	}

	.help-list {
		margin-top: 140rpx !important;
	}

	.help-list-more {
		height: 80rpx;
	}

	.grace-list>.items {
		border-bottom: 1px solid #F0F0F0;
	}

	.grace-list>.items>.body {
		margin-left: 0rpx;
		border: none;
	}

	.grace-list>.items>.body>.title {
		color: #7E8281;
	}

	.grace-list>.items>.arrow-right {
		font-size: 24rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: right;
	}

	.grace-body {
		width: 670rpx;
		margin: 0 40rpx;
		padding: 0;
	}
</style>
