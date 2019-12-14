<template>
	<graceBottomDialog :show="showDialog" @closeDialog="close()">
		<view slot="btns">
			<view class="grace-space-between grace-body grace-flex-vbottom grace-border-b">
				<view class="look-title" style="padding: 24rpx 0 16rpx 0;">Switch</view>
				<view @tap="close" class="grace-icons icon-close3" style="padding: 24rpx 0 24rpx 16rpx;"></view>
			</view>
		</view>
		<view slot="content">
			<view style="height: 800rpx;overflow: auto;" class="grace-body">
				<view class="grace-comments">
					<view class="grace-comments-items">
						<view class="grace-comments-body">
							<view class="">
								<view class="grace-comments-header">
									<text class="grace-comments-header-text look-title-sm">{{ 'Cosmos' }}</text>
								</view>
								<view
									@tap="confirm1"
									class="grace-comments-replay mb-12"
									style="border-radius: 0;"
									:style="{ border: current === 1 ? '2rpx solid #37434b' : '2rpx solid #eee' }"
								>
									<view class=" grace-flex-vcenter grace-flex ">
										<view class="flex-1">
											<view class="">Address{{ 1 }}</view>
											<view class="grace-ellipsis">cosmos1zu83m37u7...sq4q453ktq2l6lqjtzw</view>
										</view>
										<view class="tr" style="width: 80rpx;"><text v-if="1 === current" class="grace-icons icon-right" style="color: #37434b;font-size: 20px;"></text></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
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
