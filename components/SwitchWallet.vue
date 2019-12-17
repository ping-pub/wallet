<template>
	<graceBottomDialog :show="showDialog" @closeDialog="close()">
		<view slot="btns">
			<view class="grace-space-between grace-body grace-flex-vbottom grace-border-b">
				<view class="look-title-sm" style="padding: 12rpx 0 12rpx 0;">Switch</view>
				<view @tap="close" class="grace-icons icon-close3" style="padding: 12rpx 0 12rpx 12rpx;"></view>
			</view>
		</view>
		<view slot="content">
			<scroll-view  scroll-y="true" class="grace-scroll-y" style="height: 800rpx;">
				<view class="grace-body">
					<view class="mt-12">
						<view class="grace-flex grace-flex-vcenter mb-12">
							<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/cosmoshub.svg" mode=""></image>
							<view class="look-title-sm">
								Cosmos
							</view>
						</view>
						<view @tap="confirm1" class="grace-comments-replay mb-12" style="border-radius: 0;" :style="{ border: current === 1 ? '2rpx solid #37434b' : '2rpx solid #eee' }">
							<view class=" grace-flex-vcenter grace-flex ">
								<view class="flex-1">
									<view class="">Address{{ 1 }}</view>
									<view class="grace-ellipsis">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
								</view>
								<view class="tr" style="width: 80rpx;"><text v-if="1 === current" class="grace-icons icon-right" style="color: #37434b;font-size: 20px;"></text></view>
							</view>
						</view>
					</view>
				
					<view class="" v-for="i in 3" :key="i">
						<view class="grace-flex grace-flex-vcenter mb-12">
							<image class="mr-6" style="width: 48rpx;height: 48rpx;" src="../../static/wallet/kava.svg" mode=""></image>
							<view class="look-title-sm">
								Kava
							</view>
						</view>
						<view v-for="n in 10" :key="n" class="grace-comments-replay mb-12" style="border-radius: 0;border: 2rpx solid #eee">
							<view class=" grace-flex-vcenter grace-flex ">
								<view class="flex-1">
									<view class="">Address</view>
									<view class="grace-ellipsis">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
								</view>
								<view class="tr" style="width: 80rpx;"></view>
							</view>
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
