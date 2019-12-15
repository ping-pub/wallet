<template>
	<gracePage headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-center">
			<text @tap="goBack" style="padding: 0 24upx;width: 200upx;align-self: flex-end;" class="grace-black6 grace-icons icon-arrow-left"></text>
			<text style="flex: 1;text-align: center;font-size: 16px;" class="grace-black">Server</text>
			<text style="padding: 0 24upx;width: 200upx;text-align: right;align-self: flex-end;" class="grace-black6 look-app-icon look-app-icon-save"></text>
		</view>
		<view slot="gBody" class="grace-body">
			<form @submit="formSubmit" class="grace-form">
				<!-- 项目 -->
				<view class="grace-items">
					<view class="grace-label">Cosmos</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
				<view class="grace-items">
					<view class="grace-label">Kava</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
				<view class="grace-items">
					<view class="grace-label">Iris</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
			</form>
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
