<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">委托</text>
					<text class="bg-black"></text>
				</view>
				<view class="action" @tap="switchWallet">
					Address1
					<text class="cuIcon-filter text-gray"></text>
				</view>
			</view>
		</view>
		<view slot="gBody">
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />

			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Delegations' }" @tap="changeTab('Delegations')">已委托</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Validators' }" @tap="changeTab('Validators')">验证节点</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Calculator' }" @tap="changeTab('Calculator')">收益计算器</view>
				</view>
			</scroll-view>

			<view class="page-space"></view>

			<!-- Delegations -->
			<view class="" v-if="tab === 'Delegations'">

				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">总收益</text>
					</view>
					<view class="action">
						<text>领取奖励</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
				<view class="grace-flex grace-flex-vcenter tc grace-bg-white grace-border-radius-small " style="padding: 24rpx 0 24rpx 0;margin-top: 0;">
					<view class="flex-1">
						<view class="text-lg text-black">1231232500</view>
						<view class="text-sm text-gray">已委托总数</view>
					</view>
					<view class="flex-1">
						<view class="text-green text-lg">+500</view>
						<view class="text-sm text-gray">待领取奖励</view>
					</view>
				</view>

				<view class="page-space"></view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">委托人</text>
					</view>
					<view class="action"><text>Cosmoshub-3</text></view>
				</view>
				<view v-for="n in 5" :key="n" @tap="go('/pages/staking/ValidatorDetail')">
					<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
						<view class="grace-flex grace-flex-vbottom">
							<text class="flex-1 text-lg text-black">Huobi Wallet</text>
							<text class="text-lg text-black">5998989989898</text>
						</view>
						<view class="grace-flex grace-flex-vbottom">
							<text class="flex-1 text-sm text-gray">Rewards 25%</text>
							<text class="text-green">+ 0.0012</text>
						</view>
					</view>
				</view>
			</view>
			<!-- Validators -->
			<view class="" v-if="tab === 'Validators'">
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">推荐节点</text>
					</view>
					<view class="action"><text>Cosmoshub-3</text></view>
				</view>


				<view>
					<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
						<view class="grace-flex grace-flex-vbottom">
							<text class="flex-1 text-lg text-black">Huobi Wallet</text>
							<text class="text-lg text-black">5998989989898</text>
						</view>
						<view class="grace-flex grace-flex-vbottom">
							<text class="flex-1 text-sm text-gray">Rewards 25%</text>
							<text class="text-green">+ 0.0012</text>
						</view>
					</view>
				</view>
				<view class="page-space"></view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">验证节点</text>
					</view>
					<view class="action"><text>Cosmoshub-3</text></view>
				</view>


				<view v-for="n in 5" :key="n" @tap="go('/pages/staking/ValidatorDetail')">
					<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
						<view class="grace-flex grace-flex-vbottom">
							<text class="flex-1 text-lg text-black">Huobi Wallet</text>
							<text class="text-lg text-black">5998989989898</text>
						</view>
						<view class="grace-flex grace-flex-vbottom">
							<text class="flex-1 text-sm text-gray">Rewards 25%</text>
							<text class="text-green">+ 0.0012</text>
						</view>
					</view>
				</view>
			</view>

			<!-- Calculator -->
			<view class="" v-if="tab === 'Calculator'">
				<view class="bg-white">
					<view class="cu-bar bg-white">
						<view class="action">
							<text class="cuIcon-titles text-black"></text>
							<text class="text-xl text-bold">链信息</text>
						</view>
						<view class="action"><text>Cosmoshub-3</text></view>
					</view>

					<view class="grace-flex tc" style="padding: 20rpx;">
						<view class="flex-1">
							<view class="text-black text-lg">1233241</view>
							<view class="text-gray text-sm">Tokens</view>
						</view>
						<view class="flex-1">
							<view class="text-black text-lg">125</view>
							<view class="text-gray text-sm">Validators</view>
						</view>
						<view class="flex-1">
							<view class="text-black text-lg">7.89%</view>
							<view class="text-gray text-sm">Rewards</view>
						</view>
					</view>
				</view>
			</view>

			<view class="page-space"></view>
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
	import BaseMixin from '../../components/BaseMixin.js';

	export default {
		mixins: [BaseMixin, SwitchWalletMixin],
		data() {
			return {
				tab: 'Delegations',
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			changeTab(tab) {
				this.tab = tab;
			}
		}
	};
</script>
