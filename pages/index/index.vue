<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">Ping Wallet</text>
					<text class="bg-black"></text>
				</view>
				<view class="action"></view>
			</view>
		</view>
		<view slot="gBody">
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
				<view @tap="changeTab(item)" v-for="(item, key) of chains" :key="key" v-if="Object.keys(item.wallets).length > 0"
				 class="cu-item" :class="{ 'text-black cur': tabChain === item.name }">{{ item.name }}</view>
			</scroll-view>
			<view class=" solid-bottom  padding grace-border-radius-small" style="margin: 20rpx;background-image: url('../../static/index/bg.png');    background-size: cover;
    background-color: #fff;
    text-align: center;padding: 40rpx 0 60rpx;">
				<view>
					<image style="width: 120rpx;height: 120rpx;" src="../../static/wallet/asset1.png" mode=""></image>
				</view>
				<text class="text-white" style="font-size: 20px;">{{ currentCurrency }} {{ moneyTotal }}</text>
			</view>

			<view class="bg-white ">
				<view class="cu-bar ">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-lg text-bold">{{ lang.titleAddress }}</text>
					</view>
					<view class="action" @tap="go('/pages/wallet/WalletManage')"><text class="text-sm text-gray cuIcon-add"></text></view>
				</view>

				<view class="cu-list menu-avatar m-space">
					<view class="cu-item" v-for="(address, index) in chains[tabChain].wallets" :key="index" @tap="go('/pages/wallet/WalletDetail?address=' + address)">
						<image :src="chains[tabChain].logo" mode="" style="width: 96rpx;height: 96rpx;"></image>
						<view class="content" style="left: 100rpx;">
							<view class="text-black">{{ wallets[address].name }}</view>
							<view class="text-grey text-sm">{{ wallets[address].short || wallets[address].address }}</view>
						</view>
						<view class="action" style="text-align:right;width: 100%;">
							<view class="text-lg">{{ currentCurrency }}{{ (coins && coins[address] )|| '--' }}</view>
							<view class="text-gray">{{ currentCurrency }}{{price.price ? (currentCurrency === '$' ? price.price : price.priceCNY) : '--' }}</view>
						</view>
					</view>
					<PageEmpty v-if="chains[tabChain].wallets.length === 0" @tap="go('/pages/wallet/WalletCreate')"></PageEmpty>
				</view>
				<PageLoading :loading="loading"></PageLoading>
			</view>
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
	import BaseMixin from '../../components/BaseMixin.js';

	export default {
		data() {
			return {
				tabChain: 'Cosmos',
				price: {},
				coins: {},
				moneyTotal: '--'
			};
		},
		watch: {
			currentCurrency(val, old) {
				if (val) {
					this.initCoinPrice()
				}
			},
			wallets(val, old) {
				if (val) {
					this.initCoinPrice()
				}
			}
		},
		computed: {
			lang() {
				return this.$t('pagesIndex');
			},
		},
		onLoad() {
			this.initCoinPrice()
		},
		methods: {
			changeTab(chain) {
				this.tabChain = chain.name;
				this.initCoinPrice()
			},
			async initCoinPrice() {
				this.loading = true
				const coin = this.chains[this.tabChain].unit
				const res = await this.$api('common').coinPrice(coin)
				this.price = res
				await this.initData()
			},
			async initData() {
				const wallets = this.chains[this.tabChain].wallets
				const version = this.chains[this.tabChain].version
				const lcd = this.chains[this.tabChain].lcd
				const obj = {}
				const price = this.currentCurrency === '$' ? this.price.price : this.price.priceCNY
				this.moneyTotal = 0
				for (const item of wallets) {
					const coins = await this.$api(version).bankAccount(item, lcd).catch(() => {
						this.loading = false
					})
					obj[item] = (coins.total * price).toFixed(2)
					this.moneyTotal = (Number(this.moneyTotal) + Number(obj[item])).toFixed(2)
				}
				this.coins = obj
				this.loading = false
			}
		},
		mixins: [SwitchWalletMixin, BaseMixin]
	};
</script>
