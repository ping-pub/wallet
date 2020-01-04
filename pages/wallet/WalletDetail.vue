<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="wallet.name" :loading="loading">
			<text @tap="go('/pages/wallet/WalletCreate?' + 'address=' + wallet.address + '&chain=' + wallet.chain)" class="cuIcon-edit"></text>
		</PageTitle>
		<view slot="gBody">
			<view class="bg-white" style="padding-top: 40rpx;padding-bottom: 20rpx;">
				<view style="background-image: url(../../static/wallet/bg2.png);background-size: cover;padding: 40rpx 0 0;">
					<view class="tc" style="margin-bottom: 10rpx;">
						<text class="text-black" style="font-size: 20px;">$0.00</text>
					</view>
					<view class="tc" @tap="go('/pages/wallet/WalletRecive?address=' + wallet.address + '&chain=' + wallet.chain)">
						<text class="text-gray mr-6">{{ wallet.address }}</text> <text class="cuIcon-qrcode text-gray"></text>
					</view>
				</view>
			</view>

			<view class="bg-white" style="padding: 20rpx;">
				<view class="walletdetail cu-list grid col-3 no-border bg-gradual-blue grace-border-radius-small" style="padding: 0;">
					<view class="cu-item" @tap="goSwitch('/pages/goverance/Goverance')">
						<text class="cuIcon-hot" style="color: #fff;font-size: 18px;"></text>
						<text style="color: #fff;font-size: 12px;">投票</text>
					</view>
					<view class="cu-item" @tap="goSwitch('/pages/staking/Staking')">
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
				<view class="action" @tap="go('/pages/wallet/WalletTx')">
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

			<view class="" v-for="(item, index) of coins" :key="index">
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">{{ item.denom}}</text>
					</view>
					<view class="action">
						<view class="text-black text-lg">{{ item.coin}}</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="">1 Kava = $0.5</text>
					</view>
					<view class="action">
						<view class="">{{ item.coin}}</view>
					</view>
				</view>
				<view class="page-space"></view>
			</view>

		</view>
	</gracePage>
</template>

<script>
	import BaseMixin from '../../components/BaseMixin.js'

	export default {
		mixins: [BaseMixin],
		data() {
			return {
				wallet: {},
				coins: []
			}
		},
		onLoad(options) {
			const { address, chain } = options
			this.wallet = {
				address,
				chain
			}
			this.initData()
		},
		methods: {
			scan() {
				uni.scanCode();
			},
			async initData() {
				this.loading = true
				const lcd = this.chains[this.wallet.chain].lcd
				const version = this.chains[this.wallet.chain].version
				const res = await this.$api(version).bankAccount(this.wallet.address, lcd).catch(() => { this.loading = false })
				this.coins = res
				this.loading = false
			}
		}
	};
</script>
