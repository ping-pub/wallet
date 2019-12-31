<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title" :toast="toast" :msg="msg">
			<text class="cuIcon-roundcheck" @tap="save()"></text>
		</PageTitle>
		<view slot="gBody">
			<view class="cu-list menu text-left">
				<view class="cu-item" @tap="changeCurrent('￥')">
					<label class="flex justify-between align-center flex-sub" style="padding: 20rpx 0;">
						<view class="flex-sub">
							<view class="text-lg">
								人民币(￥)
							</view>
						</view>
						<view v-if="current === '￥'" class="cuIcon-roundcheckfill" style="font-size: 20px;"></view>
					</label>
				</view>
				<view class="cu-item" @tap="changeCurrent('$')">
					<label class="flex justify-between align-center flex-sub" style="padding: 20rpx 0;">
						<view class="flex-sub">
							<view class="text-lg">
								美元($)
							</view>
						</view>
						<view v-if="current === '$'" class="cuIcon-roundcheckfill" style="font-size: 20px;"></view>
					</label>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
	import BaseMixin from '../../components/BaseMixin.js'
	
	export default {
		mixins: [
			BaseMixin
		],
		computed: {
			lang() {
				return this.$t('settingCurrency')
			},
			currency() {
				return this.$store.state.currency.currency
			}
		},
		data() {
			return {
				current: '$'
			}
		},
		created() {
			this.current = this.currency
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			changeCurrent(lang) {
				this.current = lang
			},
			save() {
				try {
					this.$store.commit('changeCurrency', this.current)
					uni.setStorageSync('currency', this.current)
					this.toastShow('设置成功')
				} catch (e) {
					console.log(e)
				}
			}
		}
	}
</script>
<style>
</style>
