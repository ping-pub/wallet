<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="validator.moniker" :loading="loading">
		</PageTitle>
		<view slot="gBody">
			<view class="cu-bar bg-white">
				<view class="action">
					<view class="">
						{{ validator.moniker }}
					</view>
				</view>
				<view class="action">
					<view class="">
						{{ validator.website }}
					</view>
				</view>
			</view>

			<view class="bg-white" style="padding: 20rpx 30rpx;">
				<view class="text-grey">{{ validator.details }}</view>
			</view>
			<view class="grace-flex grace-flex-vcenter tc grace-bg-white grace-border-radius-small " style="padding: 30rpx 0 30rpx 0;margin-top: 0;">
				<view class="flex-1">
					<view class="text-lg text-black">{{ validator.tokens }}</view>
					<view class="text-sm text-gray">Total Bonded</view>
				</view>
				<view class="flex-1">
					<view class="text-green text-lg">9.43%</view>
					<view class="text-sm text-gray">Annual yield</view>
				</view>
			</view>
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-lg text-bold">Delegations</text>
				</view>
				<view class="action">
					<text>Delegate</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<view class="">
							Delegated
						</view>
					</view>
					<view class="action">
						<view class="">
							20
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<view class="">
							Unbonding
						</view>
					</view>
					<view class="action">
						<view class="">
							20022
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<view class="">
							Reward
						</view>
					</view>
					<view class="action">
						<view class="">
							20022
						</view>
					</view>
				</view>
			
		</view>
	</gracePage>
</template>

<script>
	import BaseMixin from '../../components/BaseMixin.js'

	export default {
		mixins: [BaseMixin],
		data() {
			return {
				validator: {}
			}
		},
		onLoad(options) {
			const {
				validator
			} = options
			this.initData(validator)
		},
		methods: {
			async initData(validtorAddress) {
				this.loading = true
				const res = await this.$api().validatorItem(validtorAddress).catch(() => {
					this.loading = false
				})
				this.loading = false
				this.validator = res
			}
		}
	};
</script>
