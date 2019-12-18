<template>
	<graceBottomDialog :show="showDialog" @closeDialog="close()">
		<view slot="btns">
			<view class="grace-space-between grace-body grace-flex-vbottom grace-border-b">
				<view class="look-title-sm" style="padding: 12rpx 0 12rpx 0;">Switch Chain</view>
				<view @tap="close" class="grace-icons icon-close3" style="padding: 12rpx 0 12rpx 12rpx;"></view>
			</view>
		</view>
		<view slot="content">
			<scroll-view scroll-y="true" class="grace-scroll-y" style="height: 800rpx;">
				<view class="grace-body mt-12">
					<view @tap="confirm1" class="grace-comments-replay mb-12" style="border-radius: 0;" :style="{ border: current === 1 ? '2rpx solid #37434b' : '2rpx solid #eee' }">
						<view class=" grace-flex-vcenter grace-flex ">
							<image class="mr-6 grace-box-shadow" style="width: 48rpx;height: 48rpx;border-radius: 100%;" src="../../static/wallet/cosmoshub.svg"
							 mode=""></image>
							<view class="look-title-sm flex-1">Cosmos</view>
							<view class="tr" style="width: 80rpx;"><text v-if="1 === current" class="grace-icons icon-right" style="color: #37434b;font-size: 20px;"></text></view>
						</view>
					</view>

					<view class="grace-comments-replay mb-12" style="border-radius: 0;" :style="{ border: '2rpx solid #eee' }">
						<view class=" grace-flex-vcenter grace-flex ">
							<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/kava.svg" mode=""></image>
							<view class="look-title-sm flex-1">Kava</view>
							<view class="tr" style="width: 80rpx;"></view>
						</view>
					</view>

					<view class="grace-comments-replay mb-12" style="border-radius: 0;" :style="{ border: '2rpx solid #eee' }">
						<view class=" grace-flex-vcenter grace-flex ">
							<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/iris.svg" mode=""></image>
							<view class="look-title-sm flex-1">Iris</view>
							<view class="tr" style="width: 80rpx;"></view>
						</view>
					</view>

					<view class="grace-comments-replay mb-12" style="border-radius: 0;" :style="{ border: '2rpx solid #eee' }">
						<view class=" grace-flex-vcenter grace-flex ">
							<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/cosmos.svg" mode=""></image>
							<view class="look-title-sm flex-1">Cell</view>
							<view class="tr" style="width: 80rpx;"></view>
						</view>
					</view>
				</view>

			</scroll-view>

		</view>
	</graceBottomDialog>
</template>

<script>
	import graceBottomDialog from '../graceUI/components/graceBottomDialog.vue';

	export default {
		props: {
			showDialog: {
				default: false
			}
		},
		components: {
			graceBottomDialog: graceBottomDialog
		},
		data() {
			return {
				current: 1
			};
		},
		methods: {
			close() {
				this.$emit('close')
			},
			confirm1() {
				this.close();
			}
		}
	};
</script>

<style></style>
