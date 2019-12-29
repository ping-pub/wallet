<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title">
			<text class="cuIcon-check"></text>
		</PageTitle>
		<view slot="gBody">
			<radio-group class="block">
				<view class="cu-form-group">
					<view class="title">人民币</view>
					<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
				</view>
				<view class="cu-form-group">
					<view class="title">美元</view>
					<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
				</view>
			</radio-group>
		</view>
	</gracePage>
</template>
<script>
	import graceCheckBtn from '../../graceUI/components/graceCheckBtn.vue';
	export default {
		created() {
			const lang = this._i18n.locale
			for (const item of this.items) {
				if (item.lang === lang) {
					item.checked = true
				}
			}
		},
		computed: {
			lang() {
				return this.$t('settingCurrency')
			}
		},
		data() {
			return {
				radio: 'A',
				items: [{
						checked: false,
						lang: 'en',
						text: "USD"
					},
					{
						checked: false,
						lang: 'zh',
						text: "CNY"
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
				this._i18n.locale = this.items[e[1]].lang
				console.log(this._i18n.locale)
			},
			goBack() {
				uni.navigateBack()
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
