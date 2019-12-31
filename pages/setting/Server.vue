<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="主链服务器">
			<text class="cuIcon-add big-tap" @tap="go('/pages/setting/ServerCreate')"></text>
		</PageTitle>
		<view slot="gBody">
			<view class="" v-for="(item, key) of chains" :key="key">
				<view class="page-space"></view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-titles text-black"></text>
						<text class="text-xl text-bold">{{ item.name }}</text>
					</view>
					<view class="action">
						<image style="width: 48rpx;height: 48rpx;" :src="item.logo" mode=""></image>
					</view>
				</view>

				<view class="cu-list menu-avatar bg-white">
					<view class="cu-item">
						<view class="content" style="left: 40rpx;">
							<view class="text-sm">lcd 地址</view>
							<view class="text-black text-lg">{{ item.lcd }}</view>
						</view>
						<view class="action">
							<text class="cuIcon-right text-gray"></text>
						</view>
					</view>
				</view>
			</view>
		   <view class="page-space"></view>
		</view>
	</gracePage>
</template>
<script>
	import BaseMixin from '../../components/BaseMixin.js'
	export default {
		mixins: [BaseMixin],
		created() {
			console.log(this.chains)
		},
		data() {
			return {
			}
		},
		methods: {},
	}
</script>
