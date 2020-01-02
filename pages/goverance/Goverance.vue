<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">治理</text>
					<text class="bg-black"></text>
				</view>
				<view class="action" @tap="switchWallet">
					Address1 <text class="cuIcon-filter text-gray"></text>
				</view>
			</view>
		</view>
		<view slot="gBody">
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
			<view class="page-space"></view>
			<view class="cu-card article no-card" v-for="item in list" :key="item.id">
				<view class="cu-item shadow">
					<view class="title">
						<view class="text-cut">{{ item.title }}</view>
					</view>
					<view class="content">
						<view class="desc">
							<view class="text-gray">{{ item.description }}</view>
							<view class="grace-flex grace-flex-vcenter tc mt-12 mb-12">
								<view class="flex-1">
									<view class="f-16 grace-black">
										{{ item.yes }}
									</view>
									<view class="grace-black6">
										Yes
									</view>
								</view>
								<view class="flex-1">
									<view class="f-16 grace-black">
										{{ item.no }}
									</view>
									<view class="grace-black6">
										No
									</view>
								</view>
								<view class="flex-1">
									<view class="f-16 grace-black">
										{{ item.abstain }}
									</view>
									<view class="grace-black6">
										Abstain
									</view>
								</view>
								<view class="flex-1">
									<view class="f-16 grace-black">
										{{ item.no_with_veto }}
									</view>
									<view class="grace-black6">
										No Veto
									</view>
								</view>
							</view>
							<view>
								
							</view>
						</view>
					</view>
				</view>
				<view class="page-space"></view>
			</view>

			<view class="loading-modal cu-load load-modal" v-if="loading">
				<view class="text-lg text-gray" style="margin-top: 40rpx;">
					Ping Wallet
				</view>
				<view class="text-gray" style="font-size: 12px;">加载中...</view>
			</view>
		</view>

	</gracePage>
</template>
<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
	import BaseMixin from '../../components/BaseMixin.js'

	export default {
		mixins: [BaseMixin, SwitchWalletMixin],
		computed: {
			lang() {
				return this.$t('vote');
			}
		},
		onLoad() {
			this.initList()
		},
		data() {
			return {
				loading: false,
				list: [],
				items: [{
						checked: false,
						lang: 'en',
						text: 'USD'
					},
					{
						checked: false,
						lang: 'zh',
						text: 'CNY'
					}
				]
			};
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			async initList() {
				this.loading = true
				const res = await this.$api.test({})
				const result = res.data.result
				for (const item of result) {
					console.log(item)
					item.title = item.content && item.content.value && item.content.value.title
					item.description = item.content && item.content.value && item.content.value.description && (item.content.value.description
						.substr(0, 80) + '...')
					const {
						yes,
						no,
						abstain,
						no_with_veto
					} = item.final_tally_result
					const total = Number(yes) + Number(no) + Number(abstain) + Number(no_with_veto)
					item.yes = ((Number(yes) / total) * 100).toFixed(2) + '%'
					item.no = ((Number(no) / total) * 100).toFixed(2) + '%'
					item.abstain = ((Number(abstain) / total) * 100).toFixed(2) + '%'
					item.no_with_veto = ((Number(no_with_veto) / total) * 100).toFixed(2) + '%'
				}

				this.loading = false
				this.list = result
			}
		},
	};
</script>

<style>
.loading-modal.cu-load.load-modal::after {
	border-left: 3px solid #333;
}
.loading-modal.cu-load.load-modal {
	height: 200rpx;
	width: 200rpx;
	border-radius: 100%;
}
</style>