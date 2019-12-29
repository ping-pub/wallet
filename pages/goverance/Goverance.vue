<template>
	<gracePage  headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="status_bar"></view>
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
			<view class="cu-card article no-card mb-12" v-for="n in 10" :key="n">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">是否支持冷钱包投票?</view></view>
					<view class="content">
						<view class="desc">
							<view class="text-gray"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！</view>
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
			</view>
			
			<view class="page-space"></view>
			<view class="cu-bar"></view>
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
		data() {
			return {
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
			}
		},
	};
</script>
