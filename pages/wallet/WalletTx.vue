<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title" :loading="loading" :toast="toast" :msg="msg"></PageTitle>
		<view slot="gBody">
			<!-- 			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'in' }" @tap="changeTab('in')">{{ lang.in }}</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'out' }" @tap="changeTab('out')">{{ lang.out }}</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'fail' }" @tap="changeTab('fail')">{{ lang.fail }}</view>
				</view>
			</scroll-view>
			<view class="page-space"></view> -->

			<view class="" v-for="item of list.txs" :key="item.txhash">
				<view class="cu-bar bg-white">
					<view class="action">
						{{ item.txhashShort }}
					</view>
					<view class="action">
					</view>
				</view>
			</view>
			<view class="" v-if="list.txs.length === 0" @tap="initData()">
				<PageEmpty  style="margin-top: 100rpx;"></PageEmpty>
			</view>
			
		</view>
	</gracePage>
</template>

<script>
	import BaseMixin from '../../components/BaseMixin.js'
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

	export default {
		mixins: [SwitchWalletMixin, BaseMixin],
		data() {
			return {
				tab: 'in',
				wallet: {},
				list: {
					total_count: 0,
					count: 0,
					page_number: 1,
					page_total: 1,
					limit: 30,
					txs: []
				}
			}
		},
		computed: {
			lang() {
				return this.$t('pagesWalletTx');
			},
		},
		onLoad(options) {
			const {
				address
			} = options
			this.wallet = this.wallets[address]
			this.initData()
		},
		methods: {
			changeTab(type) {
				this.tab = type
			},
			async initData() {
				this.loading = true
				const lcd = this.chains[this.wallet.chain].lcd
				const version = this.chains[this.wallet.chain].version
				const res = await this.$api(version).tx(this.wallet.address, lcd).catch(() => {
					this.toastShow('Network Error.')
					this.loading = false
				})
				if (res) {
					this.list = res
				}
				this.loading = false
			}
		}
	};
</script>
