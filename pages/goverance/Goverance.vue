<template>
	<gracePage  headerBG="#fff">
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
		<view slot="gBody" >
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
			<view class="page-space"></view>
			<view class="cu-card article no-card" v-for="item in list" :key="item.id">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">{{ item.title }}</view></view>
					<view class="content">
						<view class="desc">
							<view class="text-gray">{{ item.description }}</view>
							<view class="grace-flex grace-flex-vcenter tc mt-12 mb-12">
								<view class="flex-1">
									<view class="f-16 grace-black">
										23%
									</view>
									<view class="grace-black6">
										Yes
									</view>
								</view>
								<view class="flex-1">
									<view class="f-16 grace-black">
										36%
									</view>
									<view class="grace-black6">
										No
									</view>
								</view>
								<view class="flex-1">
									<view class="f-16 grace-black">
										22%
									</view>
									<view class="grace-black6">
										Width
									</view>
								</view>
								<view class="flex-1">
									<view class="f-16 grace-black">
										7.89%
									</view>
									<view class="grace-black6">
										Rewards
									</view>
								</view>
							</view>
							<view>
								<view class="cu-tag bg-green light sm round">投票中</view>
							</view>
						</view>
					</view>
				</view>
				<view class="page-space"></view>
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
				const res = await this.$api.test({})
				const result = res.data.result
				for (const item of result) {
					console.log(item)
					item.title = item.content && item.content.value && item.content.value.title
					item.description = item.content && item.content.value && item.content.value.description && (item.content.value.description.substr(0, 100) + '...')
				}
				this.list = result
			}
		},
	};
</script>
