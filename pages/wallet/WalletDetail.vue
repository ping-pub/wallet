<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="wallet.name" :loading="loading" :toast="toast" :msg="msg">
			<text @tap="go('/pages/wallet/WalletCreate?' + 'address=' + wallet.address)" class="cuIcon-edit"></text>
		</PageTitle>
		<view slot="gBody">
			<view class="bg-white" style="padding-top: 40rpx;padding-bottom: 20rpx;">
				<view style="background-image: url(../../static/wallet/bg2.png);background-size: cover;padding: 40rpx 0 0;">
					<view class="tc" style="margin-bottom: 10rpx;">
						<text class="text-black" style="font-size: 20px;">{{moneyTotal ? (currentCurrency + moneyTotal) : '--' }}</text>
					</view>
					<view class="tc" @tap="go('/pages/wallet/WalletRecive?address=' + wallet.address)">
						<text class="text-grey mr-6">{{ wallet.short }}</text>
						<text style="font-size: 16px;" class="cuIcon-qrcode text-grey"></text>
					</view>
				</view>
			</view>

			<view class="bg-white" style="padding: 20rpx 30rpx;">
				<view class="walletdetail cu-list grid col-3 no-border " style="padding: 0;">
					<view class="cu-item" @tap="goSwitch('/pages/staking/Staking')" style="padding: 0;">
						<text class="cuIcon-safe" style="font-size: 18px;margin-top: 0;"></text>
						<text style="font-size: 12px;margin-top: 0;">{{ lang.stake }}</text>
					</view>
					<view class="cu-item" @tap="go('/pages/wallet/WalletTx?address=' + wallet.address)" style="padding: 0;">
						<text class="cuIcon-calendar" style="font-size: 18px;margin-top: 0;"></text>
						<text style="font-size: 12px;margin-top: 0;">{{ lang.tx }}</text>
					</view>
					<view class="cu-item" @tap="go('/pages/wallet/WalletTransfer')" style="padding: 0;">
						<text class="cuIcon-exit" style="font-size: 18px;margin-top: 0;"></text>
						<text style="font-size: 12px;margin-top: 0;">{{ lang.transfer }}</text>
					</view>
				</view>
			</view>

			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">{{ chains[wallets[wallet.address].chain].unit }}</text>
				</view>
				<view class="action">
					{{currentCurrency + price}}
				</view>
			</view>
			<view class="cu-list grid col-2">
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">{{ coins.available || '--' }}</text>
					<text>{{ lang.available }}</text>
				</view>
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">{{ coins.delegated || '--' }}</text>
					<text>{{ lang.delegated }}</text>
				</view>
				<view class="cu-item">
					<text style="color: #39b54a;font-size: 16px;">{{ rewardTotal ? ('+' +rewardTotal) : '--' }}</text>
					<text>{{ lang.reward }}</text>
				</view>
				<view class="cu-item">
					<text style="color: #333333;font-size: 16px;">--</text>
					<text>{{ lang.unbonding }}</text>
				</view>
			</view>

			<view class="page-space"></view>

			<view class="" v-for="(item, index) of list" :key="index">
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
		computed: {
			lang() {
				return this.$t('pagesWalletDetail');
			},
		},
		data() {
			return {
				wallet: {
					name: '',
					address: ''
				},
				list: [],
				coins: {},
				price: '--',
				moneyTotal: '--',
				lcd: '',
				version: '',
				rewardTotal: '--',
				rewardObj: {}
			}
		},
		onLoad(options) {
			const {
				address
			} = options
			const wallet = this.wallets[address]
			if (!wallet) {
				this.goHome()
				return
			}
			this.wallet = wallet
			this.initData()
		},
		methods: {
			scan() {
				uni.scanCode();
			},
			async initCoinPrice() {
				this.loading = true
				const unit = this.chains[this.wallet.chain].unit
				const res = await this.$api('common').coinPrice(unit)
				this.price = this.currentCurrency === '$' ? res.price : res.priceCNY
			},
			async fetchBankAccount() {
				const res = await this.$api(this.version).bankAccount(this.wallet.address, this.lcd).catch(() => {
					this.toastShow('Network Error.')
					this.loading = false
				})
				this.coins = res || {}
			},
			async initData() {
				this.loading = true
				this.lcd = this.chains[this.wallet.chain].lcd
				this.version = this.chains[this.wallet.chain].version
				await this.fetchBankAccount()
				await this.initCoinPrice()
				this.moneyTotal = this.coins.total ? (Number(this.coins.total) * Number(this.price)).toFixed(2) : ''
				this.initRewardTotal()
				this.initUnbonding()
				this.loading = false
			},
			async initRewardTotal() {
				const wallet = this.wallet.address
				const res = await this.$api(this.version).delegationRewardTotal(wallet, this.lcd)
				const {
					rewardTotal,
					rewardObj
				} = res
				this.rewardTotal = rewardTotal
				this.rewardObj = rewardObj
			},
			async initUnbonding() {
				const wallet = this.wallet.address
				const res = await this.$api(this.version).delegationUnbonding(wallet, this.lcd)
			},
			
		}
	};
</script>
