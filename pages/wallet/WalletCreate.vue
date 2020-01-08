<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="(create ? lang.titleCreate : lang.titleEdit )" :toast="toast" :msg="msg">
			<view class="">
				<text @tap="save">{{ lang.save }}</text>
			</view>
		</PageTitle>

		<view slot="gBody">
			<form>
				<view class="cu-form-group form-title">
					<view class="title  text-black">{{ lang.walletName }}</view>
				</view>
				<view class="cu-form-group form-content">
					<input v-model="form.name" :placeholder="lang.walletNameInput" name="input"></input>
				</view>
				<view class="page-space"></view>
				<view class="cu-form-group form-title">
					<view class="title  text-black">{{ lang.walletAddress }}</view>
					<!-- #ifdef APP-PLUS -->
					<text v-if="create">
						<text class="cuIcon-scan mr-6"></text>
						<text> {{ lang.scan }}</text>
					</text>
					<!-- #endif -->
					<text v-if="!create" class="cuIcon-lock text-grey"></text>
				</view>
				<view class="cu-form-group form-content">
					<input v-if="create" v-model="form.address" :placeholder="lang.walletAddressInput" name="input"></input>
					<text v-if="!create" class="text-grey">{{ form.address }}</text>
				</view>

				<view class="page-space"></view>

				<view class="cu-form-group form-title">
					<view class="title  text-black">{{ lang.mainChain }}</view>
				</view>

				<view class="bg-white">
					<view class="cu-list grid col-2 no-border" style="padding: 20rpx 40rpx;">
						<view v-for="(item, key) of chains" :key="key" @tap="changeChain(item.name)" class="cu-item walletcreate-chainitem"
						 style="padding-top: 20rpx;padding-bottom: 10rpx;margin-bottom: 20rpx;" :class="{ 'walletcreate-chainitem-active': form.chain ===  item.name }">
							<image :src="item.logo" class="shadow" style="width: 56rpx;height: 56rpx;margin: 0 auto;" mode=""></image>
							<text style="color: #333333;">{{ item.name }}</text>
						</view>
					</view>
				</view>
				<view class="page-space"></view>
				<view v-if="!create" class="" style="margin: 0 30rpx;" @tap="remove()">
					<button class="cu-btn line-red lg" style="width: 100%"><text class="cuIcon-delete"></text>{{ lang.remove }}</button>
				</view>
			</form>
		</view>
	</gracePage>
</template>
<script>
	// cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw
	import BaseMixin from '../../components/BaseMixin.js';
	export default {
		mixins: [BaseMixin],
		computed: {
			lang() {
				return this.$t('pagesWalletCreate');
			},
		},
		data() {
			return {
				create: null,
				form: {
					chain: 'Cosmos',
					name: '',
					address: ''
				}
			}
		},
		onLoad(options) {
			const {
				address,
				create
			} = options
			this.create = create || null
			if (!create) {
				this.form = this.wallets[address]
			}
		},
		methods: {
			changeChain(type) {
				this.form.chain = type
			},
			save() {
				const {
					chain,
					name,
					address
				} = this.form
				if (!chain || !name || !address) {
					this.toastShow(this.lang.saveTip)
					return
				}
				// 新增判断地址重复问题
				if (this.create && this.wallets[address]) {
					this.toastShow(this.lang.addressAdded)
					return
				}
				try {
					if (this.create) {
						this.$store.commit('walletCreate', this.form)
					}
					if (!this.create) {
						this.$store.commit('walletEdit', this.form)
					}
					this.toastShow(this.lang.saveOk)
					this.goBack()
				} catch (e) {
					console.log(e)
				}
			},
			remove() {
				this.$store.commit('walletDelete', this.form)
			}
		}
	}
</script>
<style>
	.walletcreate-chainitem {
		background: #fff;
		padding: 20rpx 0;
		border: 2rpx solid #fff;
	}

	.walletcreate-chainitem-active {
		background: #eee;
		padding: 20rpx 0;
		border: 2rpx solid #333333;
	}
</style>
