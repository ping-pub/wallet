<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="主链服务器">
			<view class="">
				<text class="cuIcon-roundcheck mr-6"></text>
				<text>保存</text>
			</view>
		</PageTitle>
		<view slot="gBody">
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">Cosmos</text>
				</view>
				<view class="action"><image style="width: 48rpx;height: 48rpx;" src="../../static/wallet/cosmoshub.svg" mode=""></image></view>
			</view>
			
			<view class="cu-list menu-avatar bg-white">
				<view class="cu-item">
					<view class="content" style="left: 40rpx;">
						<view class="" style="font-size: 14px;">默认地址</view>
						<view class="text-black text-lg">https://lcd.laync.com</view>
					</view>
					<view class="action">
						<text class="cuIcon-roundcheckfill" style="font-size: 24px;"></text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content" style="left: 40rpx;">
						<view class="" style="font-size: 14px;">自定义地址</view>
						<view class="text-black text-lg">https://lcd.laync.com</view>
					</view>
				</view>
			</view>
			<view class="page-space"></view>
		</view>
	</gracePage>
</template>
<script>
	import graceCheckBtn from '../../graceUI/components/graceCheckBtn.vue';
	export default {
		data() {
			return {
				items: [{
						checked: false,
						text: "English"
					},
					{
						checked: true,
						text: "简体中文"
					}
				]
			}
		},
		methods: {
			checkedChange: function(e) {
				for (const item of this.items) {
					item.checked = false
				}
				this.items[e[1]].checked = e[0];
			},
			goBack() {
				uni.navigateBack()
			},

			formSubmit: function(e) {
				wx.showToast({
					title: '请观察控制台',
					icon: 'none'
				});
				console.log(JSON.stringify(e.detail.value));
			}
		},
		components: {
			graceCheckBtn
		}
	}
</script>
<style>
	.checkBtns {
		width: 50rpx;
	}
</style>
