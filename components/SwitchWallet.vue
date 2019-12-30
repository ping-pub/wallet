<template>
	<view class="cu-modal" :class="showDialog?'show':''" @tap="close" @touchmove.stop.prevent="">
		<view class="cu-dialog" @tap.stop="" style="max-height: 80%;">
			<view class="cu-bar bg-white ">
				<view class="action">
					<text class="cu-tag bg-olive round shadow">Address-3</text>
				</view>
				<view class="content">切换钱包</view>
				<view class="action" @tap="close">
					<text class="cuIcon-close text-gray"></text>
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
				<view class="cu-item text-black cur">
					Cosmos
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Cosmos
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
				<view class="cu-item">
					Kava
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" style="height: 600rpx;">
				<view class="cu-list menu text-left">
					<view class="cu-item" v-for="(item,index) in 10" :key="index">
						<label class="flex justify-between align-center flex-sub" style="padding: 20rpx 0;">
							<view class="flex-sub">
								<view class="text-lg">
									Address {{index +1}}
								</view>
								<view class="text-sm text-gray">
									Address {{index +1}}
								</view>
							</view>
							<view v-if="current === item" class="cuIcon-check" style="font-size: 18px;"></view>
						</label>
					</view>
				</view>
			</scroll-view>
			<view>
				<button class="cu-btn bg-black" style="width: 100%;border-radius: 0;height: 80rpx;">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showDialog: {
				default: false
			}
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
			},
			changeItem(e) {
				console.log(e)
				this.current = e
			}
		}
	};
</script>

<style></style>
