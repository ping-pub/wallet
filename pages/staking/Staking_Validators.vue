<template>
	<view class="">
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-black"></text>
				<text class="text-lg text-bold">{{ lang.titleRecommend }}</text>
			</view>
			<view class="action"><text class="cuIcon-hotfill text-red"></text></view>
		</view>

		<view>
			<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1 text-lg text-black">Ping.pub</text>
					<text class="text-lg text-black">--</text>
				</view>
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1 text-sm text-gray">--</text>
					<text class="text-green">--</text>
				</view>
			</view>
		</view>
		<view class="page-space"></view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-titles text-black"></text>
				<text class="text-lg text-bold">{{ lang.titleValidators }}</text>
			</view>
			<view class="action"  @tap="initList()"><text class="mr-6">{{ currentChain.name }}</text> <text class="cuIcon-refresh"></text> </view>
		</view>


		<view v-for="item in list" :key="item.operator_address" @tap="go('/pages/staking/ValidatorDetail?validator=' + item.operator_address)">
			<view style="padding:24rpx 36rpx;" class="grace-border-radius-small grace-border-b grace-bg-white">
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1 text-lg text-black">{{ item.moniker }}</text>
					<text class="text-lg text-black">{{ item.tokens }}</text>
				</view>
				<view class="grace-flex grace-flex-vbottom">
					<text class="flex-1 text-sm text-gray">Rate {{ item.rate }}</text>
					<text class="text-green">--</text>
				</view>
			</view>
		</view>
		<view v-if="list.length === 0" class="tc text-gray" style="padding: 20rpx;" @tap="initList()">
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
				return this.$t('pagesStaking_Validators');
			},
		},
		data() {
			return {
				loading: false,
				list: []
			}
		},
		created() {
			this.initList()
		},
		methods: {
			init() {
				this.initList()
			},
			async initList() {
				this.loading = true
				const res = await this.$api().validatorList().catch(e => { this.loading = false })
				this.loading = false
				this.list = res || []
			}
		}
	}
</script>
