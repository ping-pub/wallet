<template>
	<view class="">

		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-black"></text>
				<text class="text-lg text-bold">{{ lang.titleReward}}</text>
			</view>
			<view class="action">
				<text>{{ lang.btnClaim}}</text>
				<text class="cuIcon-right"></text>
			</view>
		</view>
		<view class="grace-flex grace-flex-vcenter tc grace-bg-white grace-border-radius-small " style="padding: 24rpx 0 24rpx 0;margin-top: 0;">
			<view class="flex-1">
				<view class="text-lg text-black">{{ listTotal }}</view>
				<view class="text-sm text-gray">{{ lang.rewardNum}}</view>
			</view>
			<view class="flex-1">
				<view class="text-green text-lg">{{rewardTotal ? '+ ' + rewardTotal : '--'}}</view>
				<view class="text-sm text-gray">{{ lang.rewardWait}}</view>
			</view>
		</view>

		<view class="page-space"></view>
		<view class="cu-bar bg-white" >
			<view class="action">
				<text class="cuIcon-titles text-black"></text>
				<text class="text-lg text-bold mr-12">{{ lang.validators }}</text>
				<view class="cu-tag bg-gray round">{{ list.length }}</view>
			</view>
			<view class="action" @tap="init()"><text class="mr-12">{{ currentChain.name }}</text><text class="cuIcon-refresh"></text></view>
		</view>
		<view v-for="item in list" :key="item.address" @tap="go('/pages/staking/ValidatorDetail?validator=' + item.operator_address)">
			<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1 text-lg text-black">{{ item.moniker }}</text>
					<text class="text-lg text-black">{{ item.shares }}</text>
				</view>
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1 text-sm text-gray">Rate {{ item.rate }}</text>
					<text class="text-green">+ {{ rewardObj[item.operator_address] }}</text>
				</view>
			</view>
		</view>
		<view @tap="init()" class="bg-white" v-if="list.length === 0">
			<PageEmpty ></PageEmpty>
		</view>
		<PageLoading :loading="loading"></PageLoading>
	</view>
</template>

<script>
	import BaseMixin from '../../components/BaseMixin.js';

	export default {
		mixins: [BaseMixin],
		computed: {
			lang() {
				return this.$t('pagesStaking_Delegations');
			},
		},
		data() {
			return {
				loading: false,
				list: [],
				listTotal: '0.00',
				rewardObj: {},
				rewardTotal: '0.00'
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.reset()
				this.initList()
				this.initRewardTotal()
			},
			reset() {
				this.list = []
				this.listTotal = '0.00'
				this.rewardObj = {}
				this.rewardTotal = '0.00'
			},
			async initList() {
				this.loading = true
				const wallet = this.currentWallet.address
				const res = await this.$api().delegationList(wallet).catch(() => {
					this.loading = false
				})
				this.loading = false
				this.list = res && res.list || []
				this.listTotal = res && res.total || '0.00'
			},
			async initRewardTotal() {
				const wallet = this.currentWallet.address
				const res = await this.$api().delegationRewardTotal(wallet)
				const { rewardTotal, rewardObj } = res
				this.rewardTotal = rewardTotal
				this.rewardObj = rewardObj
			}
		}
	}
</script>
