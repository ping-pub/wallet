<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">治理</text>
					<text class="bg-black"></text>
				</view>
				<view class="action" @tap="switchWallet">
					{{ currentWallet.name }} <text class="cuIcon-filter text-gray"></text>
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

			<PageLoading :loading="loading"></PageLoading>
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
				list: []
			};
		},
		methods: {
			init() {
				this.initList()
			},
			async initList() {
				this.loading = true
				const result = await this.$api().proposalList().catch(e => { this.loading = false })
				this.loading = false
				this.list = result
			}
		},
	};
</script>

