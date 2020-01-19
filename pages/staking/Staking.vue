<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">{{ lang.title }}</text>
					<text class="bg-black"></text>
				</view>
				<view class="action" @tap="switchWallet">
					{{ currentWallet.name }}
					<text class="cuIcon-filter text-gray"></text>
				</view>
			</view>
		</view>
		<view slot="gBody">
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />

			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Delegations' }" @tap="changeTab('Delegations')">{{ lang.tabDelegations }}</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Validators' }" @tap="changeTab('Validators')">{{ lang.tabValidators }}</view>
					<!-- <view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Calculator' }" @tap="changeTab('Calculator')">{{ lang.tabCalculator }}</view> -->
				</view>
			</scroll-view>

			<view class="page-space"></view>

			<!-- Delegations -->
			<Staking_Delegations id="delegations" ref="delegations" :class="{ tabHide: tab !== 'Delegations', tabShow: tab === 'Delegations' }"></Staking_Delegations>
			<!-- Validators -->
			<Staking_Validators id="validators" ref="validators" :class="{ tabHide: tab !== 'Validators', tabShow: tab === 'Validators' }"></Staking_Validators>

			<!-- Calculator -->
			<Staking_Calculator id="calculator" ref="calculator" :class="{ tabHide: tab !== 'Calculator', tabShow: tab === 'Calculator' }"></Staking_Calculator>

			<view class="page-space"></view>
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
	import BaseMixin from '../../components/BaseMixin.js';
	import Staking_Delegations from './Staking_Delegations.vue';
	import Staking_Validators from './Staking_Validators.vue';
	import Staking_Calculator from './Staking_Calculator.vue';

	export default {
		components: {
			Staking_Delegations,
			Staking_Calculator,
			Staking_Validators
		},
		computed: {
			lang() {
				return this.$t('pagesStaking');
			},
		},
		mixins: [BaseMixin, SwitchWalletMixin],
		data() {
			return {
				tab: 'Delegations'
			};
		},
		methods: {
			init() {
				this.$refs.delegations.init()
				this.$refs.validators.init()
				this.$refs.calculator.init()
			},
			changeTab(tab) {
				this.tab = tab;
			}
		}
	};
</script>

<style>
	.tabHide {
		display: none;
	}

	.tabShow {
		display: block;
	}
</style>
