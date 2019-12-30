<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">Ping Wallet</text>
					<text class="bg-black"></text>
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view slot="gBody">
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
				<view class="cu-item text-black cur">
					Cosmos
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Cosmos
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
			</scroll-view>
			<view
				class=" solid-bottom  padding grace-border-radius-small"
				style="margin: 20rpx;background-image: url('../../static/index/bg.png');    background-size: cover;
    background-color: #fff;
    text-align: center;padding: 40rpx 0 60rpx;"
			>
				<view><image style="width: 120rpx;height: 120rpx;" src="../../static/wallet/asset1.png" mode=""></image></view>
				<text class="text-white" style="font-size: 20px;">$8212,992,134,199</text>
			</view>

			<view class="bg-white ">
				<view class="cu-bar ">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">地址</text>
					</view>
					<view class="action"  @tap="go('/pages/wallet/WalletManage')">
						<text class="text-sm text-gray cuIcon-right"></text>
					</view>
				</view>

				<view class="cu-list menu-avatar m-space">
					<view class="cu-item" v-for="(item, index) in 6" :key="index" @tap="go('/pages/wallet/WalletDetail')">
						<image src="../../static/wallet/cosmoshub.svg" mode="" style="width: 96rpx;height: 96rpx;"></image>
						<view class="content" style="left: 100rpx;">
							<view class="text-black">Address1</view>
							<view class="text-gray text-sm">cosmos1zuu...ktq2tzw</view>
						</view>
						<view class="action" style="text-align:right;width: 100%;">
							<view class="cu-tag round bg-grey"><text class="text-lg">$12,992,134,199</text></view>
						</view>
					</view>
				</view>
			</view>

			<view class="page-space"></view>
			<SwtichChain :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
		
	</gracePage>
</template>

<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
import BaseMixin from '../../components/BaseMixin.js'
import SwtichChain from '../../components/SwitchChain.vue';

export default {
	data() {
		return {
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				},
				{
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				},
				{
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}
			],
			modalName: null,
			gridCol: 3,
			gridBorder: false,
			menuBorder: false,
			menuArrow: false,
			menuCard: false,
			skin: false,
			listTouchStart: 0,
			listTouchDirection: null
		};
	},
	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		Gridchange(e) {
			this.gridCol = e.detail.value;
		},
		Gridswitch(e) {
			this.gridBorder = e.detail.value;
		},
		MenuBorder(e) {
			this.menuBorder = e.detail.value;
		},
		MenuArrow(e) {
			this.menuArrow = e.detail.value;
		},
		MenuCard(e) {
			this.menuCard = e.detail.value;
		},
		SwitchSex(e) {
			this.skin = e.detail.value;
		},

		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStart = e.touches[0].pageX;
		},

		// ListTouch计算方向
		ListTouchMove(e) {
			this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
		},

		// ListTouch计算滚动
		ListTouchEnd(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = e.currentTarget.dataset.target;
			} else {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		},
		go(path) {
			uni.navigateTo({
				url: path
			});
		},
		goSwitch(path) {
			uni.switchTab({
				url: path
			});
		}
	},
	components: {
		SwtichChain
	},
	mixins: [SwitchWalletMixin, BaseMixin]
};
</script>
