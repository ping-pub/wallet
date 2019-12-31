<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title" :toast="toast" :msg="msg">
			<text class="cuIcon-check" @tap="saveLang()"></text>
		</PageTitle>
		<view slot="gBody">
			<view class="cu-list menu text-left">
				<view class="cu-item" @tap="changeCurrent('zh-CN')">
					<label class="flex justify-between align-center flex-sub" style="padding: 20rpx 0;">
						<view class="flex-sub">
							<view class="text-lg">
								简体中文
							</view>
						</view>
						<view v-if="current === 'zh-CN'" class="cuIcon-roundcheckfill" style="font-size: 20px;"></view>
					</label>
				</view>
				<view class="cu-item" @tap="changeCurrent('en-US')">
					<label class="flex justify-between align-center flex-sub" style="padding: 20rpx 0;">
						<view class="flex-sub">
							<view class="text-lg">
								English
							</view>
						</view>
						<view v-if="current === 'en-US'" class="cuIcon-roundcheckfill" style="font-size: 20px;"></view>
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
		created() {
			const lang = this._i18n.locale
			console.log(lang)
			this.current = lang
		},
		computed: {
			lang() {
				return this.$t('settingLanguage')
			}
		},
		data() {
			return {
				current: ''
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			changeCurrent(lang) {
				this.current = lang
			},
			saveLang() {
				try {
					this._i18n.locale = this.current
					uni.setStorageSync('language', this.current)
					this.toastShow('设置成功')
				} catch(e) {
					
				}
			}
		},
	}
</script>
<style>
	.checkBtns {
		width: 50rpx;
	}
</style>
