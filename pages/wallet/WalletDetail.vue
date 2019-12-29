<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Address1"></PageTitle>
		<view slot="gBody">
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Address1</text>
				</view>
				<view class="action">
					<text class="text-sm text-gray cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-list menu bg-white">
				<view class="cu-item">
					<view class="content"><text class="text-black">地址</text></view>
					<view class="action"><text class="text-gray mr-6">cosmos1...453ktq2l6lqjtzw</text> <text class="cuIcon-qrcode text-gray"></text> </view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">总额</text></view>
					<view class="action"><text class="text-green text-lg">$2,134,992,134.32</text></view>
				</view>
			</view>

			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">ATOM</text>
				</view>
				<view class="action"></view>
			</view>
			<view class="cu-list grid" :class="['col-' + 3,true?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<3*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="cu-list menu">
				<view class="cu-item">
					<view class="content"><text class="text-black">总额</text></view>
					<view class="action"><text class="text-green text-lg">$2,134,992,134.32</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">收益</text></view>
					<view class="action"><text class=" text-green text-lg">+ 823123</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">数量</text></view>
					<view class="action"><text class=" text-grey text-lg">123324 ATOM</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">单价</text></view>
					<view class="action"><text class=" text-grey text-lg">1 ATOM = $5.2</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">可用</text></view>
					<view class="action"><text class=" text-grey text-lg">90,123,901,234.91</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">委托</text></view>
					<view class="action"><text class=" text-grey text-lg">90,123,901,234.91</text></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-black">锁定</text></view>
					<view class="action"><text class=" text-grey text-lg">90,123,901,234.91</text></view>
				</view>
			</view>

			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Kava</text>
				</view>
				<view class="action"><view class="text-green">$2,134,992,134.32</view></view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Kava = $0.5</text>
				</view>
				<view class="action"><view class="">12323 iaa</view></view>
			</view>
			<view class="page-space"></view>

			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Iris</text>
				</view>
				<view class="action"><view class="text-green">$2,134,992,134.32</view></view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="">1 Iris = $0.5</text>
				</view>
				<view class="action"><view class="">12323 iris</view></view>
			</view>
			<view class="page-space"></view>
		
			<SwitchWallet :showDialog="showSwitchWallet" @close="closeSwitchWallet" />
		</view>
	</gracePage>
</template>

<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

export default {
	mixins: [SwitchWalletMixin],
	data() {
		return {
			cuIconList: [{
				cuIcon: 'cardboardfill',
				color: 'red',
				badge: 120,
				name: 'VR'
			}, {
				cuIcon: 'recordfill',
				color: 'orange',
				badge: 1,
				name: '录像'
			}, {
				cuIcon: 'picfill',
				color: 'yellow',
				badge: 0,
				name: '图像'
			}, {
				cuIcon: 'noticefill',
				color: 'olive',
				badge: 22,
				name: '通知'
			}, {
				cuIcon: 'upstagefill',
				color: 'cyan',
				badge: 0,
				name: '排行榜'
			}, {
				cuIcon: 'clothesfill',
				color: 'blue',
				badge: 0,
				name: '皮肤'
			}, {
				cuIcon: 'discoverfill',
				color: 'purple',
				badge: 0,
				name: '发现'
			}, {
				cuIcon: 'questionfill',
				color: 'mauve',
				badge: 0,
				name: '帮助'
			}, {
				cuIcon: 'commandfill',
				color: 'purple',
				badge: 0,
				name: '问答'
			}, {
				cuIcon: 'brandfill',
				color: 'mauve',
				badge: 0,
				name: '版权'
			}]
		}
	},
	methods: {
		scan() {
			uni.scanCode();
		},
		goSwitch(path) {
			uni.switchTab({
				url: path
			});
		},
		go(path) {
			uni.navigateTo({
				url: path
			});
		},
		goBack() {
			uni.navigateBack();
		}
	}
};
</script>
