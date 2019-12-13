<template>
	<gracePage headerBG="#fff">
		<view class="status_bar"></view>
		<view slot="gHeader" class="grace-flex-center">
			<text @tap="goBack" style="padding: 0 24upx;width: 200upx;align-self: flex-end;" class="grace-black6 grace-icons icon-arrow-left"></text>
			<text style="flex: 1;text-align: center;font-size: 18px;" class="grace-black">{{ lang.title }}</text>
			<text style="padding: 0 24upx;width: 200upx;text-align: right;align-self: flex-end;" class="grace-black6 look-app-icon look-app-icon-save"></text>
		</view>
		<view slot="gBody" class="grace-body">
			<view class="grace-list">
				<view class="items" v-for="(item, index) in items" :key="index">
					<view class="checkBtns">
						<graceCheckBtn checkedColor="#37434b" :checked="item.checked" :parameter="[index]" @change="checkedChange" :size="46"></graceCheckBtn>
					</view>
					<view class="body">
						<view class="title">{{item.text}}</view>
					</view>
				</view>
			</view>
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
				return this.$t('settingLanguage')
			}
		},
		data() {
			return {
				items: [{
						checked: false,
						lang: 'en',
						text: "English"
					},
					{
						checked: false,
						lang: 'zh',
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
