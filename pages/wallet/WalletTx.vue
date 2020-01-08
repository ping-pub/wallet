<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title" :loading="loading" :toast="toast" :msg="msg"></PageTitle>
		<view slot="gBody">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'all' }" @tap="changeTab('all')">{{ lang.all }}</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'out' }" @tap="changeTab('out')">{{ lang.out }}</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'in' }" @tap="changeTab('in')">{{ lang.in }}</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'fail' }" @tap="changeTab('fail')">{{ lang.fail }}</view>
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
				tab: 'all',
				wallet: {},
				list: []
			}
		},
		computed: {
			lang() {
				return this.$t('pagesWalletTx');
			},
		},
		onLoad(options) {
			const {
				address,
				chain
			} = options
			this.wallet = this.chains[chain].wallets[address]
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
				const res = await this.$api(version).delegationTx(this.wallet.address, lcd).catch(() => {
					this.toastShow('Network Error.')
					this.loading = false
				})
				this.list = res
				this.loading = false
			}
		}
	};
</script>
