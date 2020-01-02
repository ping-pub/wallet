<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="交易记录"></PageTitle>
		<view slot="gBody">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'all' }" @tap="changeTab('all')">全部</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'out' }" @tap="changeTab('out')">转出</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'in' }" @tap="changeTab('in')">转入</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'fail' }" @tap="changeTab('fail')">失败</view>
				</view>
			</scroll-view>
			
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Kava = $0.5</text>
				</view>
				<view class="action">
					<view class="">12323 iaa</view>
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
				tab: 'all',
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
			changeTab(type) {
				this.tab = type
			},
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
