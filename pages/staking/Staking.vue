<template>
	<gracePage headerBG="#fff">
		<view class="" slot="gHeader">
			<view class="cu-bar bg-white">
				<view class="action sub-title">
					<text class="text-xl text-bold text-black">委托</text>
					<text class="bg-black"></text>
				</view>
				<view class="action" @tap="switchWallet">
					Address1
					<text class="cuIcon-filter text-gray"></text>
				</view>
			</view>
		</view>
		<view slot="gBody">
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />

			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Delegations' }" @tap="changeTab('Delegations')">已委托</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Validators' }" @tap="changeTab('Validators')">验证节点</view>
					<view class="cu-item flex-sub" :class="{ 'text-black cur': tab === 'Calculator' }" @tap="changeTab('Calculator')">收益计算器</view>
				</view>
			</scroll-view>

			<view class="page-space"></view>

			<!-- Delegations -->
			<Staking_Delegations v-show="tab === 'Delegations'"></Staking_Delegations>
			<!-- Validators -->
			<Staking_Validators v-show="tab === 'Validators'"></Staking_Validators>

			<!-- Calculator -->
			<Staking_Calculator v-show="tab === 'Calculator'"></Staking_Calculator>

			<view class="page-space"></view>
		</view>
	</gracePage>
</template>

<script>
	import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';
	import BaseMixin from '../../components/BaseMixin.js';
	import Staking_Delegations from './Staking_Delegations.vue'
	import Staking_Validators from './Staking_Validators.vue'
	import Staking_Calculator from './Staking_Calculator.vue'

	export default {
		components: {
			Staking_Delegations,
			Staking_Calculator,
			Staking_Validators
		},
		mixins: [BaseMixin, SwitchWalletMixin],
		data() {
			return {
				tab: 'Delegations',
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			changeTab(tab) {
				this.tab = tab;
			}
		}
	};
</script>
