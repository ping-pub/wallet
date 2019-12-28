<template>
	<view class="cu-bar tabbar bg-white">
		<view class="action text-gray" :class="{ 'text-black' : page === 'index' }" @tap="go('/pages/index/index')">
			<view class="cuIcon-home"></view>
			资产
		</view>
		<view class="action text-gray" :class="{ 'text-black' : page === 'staking' }" @tap="go('/pages/staking/Staking')">
			<view class="cuIcon-moneybag"><view class="cu-tag badge">5</view></view>
			委托
		</view>
		<view class="action text-gray add-action">
			<button class="cu-btn cuIcon-add bg-black shadow" @click="go('/pages/walletManage/index')"></button>
			添加
		</view>
		<view class="action text-gray" :class="{ 'text-black' : page === 'goverance' }" @tap="go('/pages/goverance/Goverance')">
			<view class="cuIcon-explore"></view>
			治理
		</view>
		<view class="action text-gray" :class="{ 'text-black' : page === 'setting' }" @tap="go('/pages/setting/Setting')">
			<view class="cuIcon-settings"><view class="cu-tag badge"></view></view>
			设置
		</view>
	</view>
</template>

<script>
import BaseMixin from './BaseMixin.js'
	
export default {
	mixins: [BaseMixin],
	props: {
		page: {
			default: 'index'
		}
	},
	data() {
		return {};
	}
};
</script>

<style></style>
