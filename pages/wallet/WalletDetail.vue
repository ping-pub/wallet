<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Address1">
			<text @tap="go('/pages/wallet/WalletCreate')" class="cuIcon-edit"></text>
		</PageTitle>
		<view slot="gBody">
			<view class="bg-white" style="padding-top: 40rpx;padding-bottom: 20rpx;">
				<view style="background-image: url(../../static/wallet/bg2.png);background-size: cover;padding: 40rpx 0 0;">
					<view class="tc" style="margin-bottom: 10rpx;">
						<text class="text-black" style="font-size: 20px;">$2,134,992,134.32</text>
					</view>
					<view class="tc">
						<text class="text-gray mr-6">cosmos1...453ktq2l6lqjtzw</text> <text class="cuIcon-qrcode text-gray"></text>
					</view>

				</view>
			</view>

			<view class="bg-white" style="padding: 20rpx;">
				<view class="walletdetail cu-list grid col-3 no-border bg-gradual-blue grace-border-radius-small" style="padding: 0;">
					<view class="cu-item">
						<text class="cuIcon-hot" style="color: #fff;font-size: 18px;"></text>
						<text style="color: #fff;font-size: 12px;">投票</text>
					</view>
					<view class="cu-item">
						<text class="cuIcon-safe" style="color: #fff;font-size: 18px;"></text>
						<text style="color: #fff;font-size: 12px;">委托</text>
					</view>
					<view class="cu-item">
						<text class="cuIcon-down" style="color: #fff;font-size: 18px;"></text>
						<text style="color: #fff;font-size: 12px;">赎回</text>
					</view>
				</view>
			</view>

			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">ATOM</text>
				</view>
				<view class="action">
					<text class="text-gray" style="font-size: 12px;">交易</text>
					<text class="cuIcon-right text-gray" style="font-size: 14px;"></text>
				</view>
			</view>
			<view class="cu-list grid col-2">
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">90,123,901,234.91</text>
					<text>可用</text>
				</view>
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">90,123,901,234.91</text>
					<text>委托</text>
				</view>
				<view class="cu-item">
					<text style="color: #39b54a;font-size: 16px;">+90,123,901,234.91</text>
					<text>收益</text>
				</view>
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">90,123,901,234.91</text>
					<text>赎回中</text>
				</view>
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">$4.5</text>
					<text>市价</text>
				</view>
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">$90,123,901,234.91</text>
					<text>总值</text>
				</view>
			</view>

			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Kava</text>
				</view>
				<view class="action">
					<view class="text-black text-lg">$2,134,992,134.32</view>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Kava = $0.5</text>
				</view>
				<view class="action">
					<view class="">12323 iaa</view>
				</view>
			</view>
			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Iris</text>
				</view>
				<view class="action">
					<view class="text-black text-lg">$2,134,992,134.32</view>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Iris = $0.5</text>
				</view>
				<view class="action">
					<view class="">12323 iris</view>
				</view>
			</view>
			<view class="page-space"></view>

			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

	export default {
		mixins: [SwitchWalletMixin],
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '可用'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}]
			}
		},
		methods: {
			scan() {
				uni.scanCode();
			},
			goSwitch(path) {
				uni.switchTab({
					url: path
				});
			},
			go(path) {
				uni.navigateTo({
					url: path
				});
			},
			goBack() {
				uni.navigateBack();
			}
		}
	};
</script>
