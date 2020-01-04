<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="(create ? '添加' : '编辑') + '钱包'" :toast="toast" :msg="msg">
			<view class="">
				<text @tap="save" class="cuIcon-roundcheck big-tap"></text>
			</view>
		</PageTitle>

		<view slot="gBody">
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">钱包主链</text>
				</view>
				<view class="action"></view>
			</view>
			<view class="bg-white">
				<view class="cu-list grid col-2 no-border" style="padding: 20rpx 40rpx;">
					<view v-for="(item, key) of chains" :key="key" @tap="changeChain(item.name)" class="cu-item walletcreate-chainitem" style="padding-top: 20rpx;padding-bottom: 10rpx;margin-bottom: 20rpx;"
					 :class="{ 'walletcreate-chainitem-active': form.chain ===  item.name }">
						<image :src="item.logo" class="shadow" style="width: 56rpx;height: 56rpx;margin: 0 auto;" mode=""></image>
						<text style="color: #333333;">{{ item.name }}</text>
					</view>
				</view>
			</view>

			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">基础信息</text>
				</view>
				<view class="action"></view>
			</view>
			<form>
				<view class="cu-form-group">
					<view class="title">钱包名称</view>
				</view>
				<view class="cu-form-group">
					<input v-model="form.name" placeholder="请输入" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">钱包地址</view>
					<text class="cuIcon-copy"></text>
				</view>
				<view class="cu-form-group">
					<textarea v-model="form.address" maxlength="-1" placeholder="请输入钱包地址"></textarea>
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
			const { address, chain, create } = options
			this.create = create || null
			if (!create) {
				this.form.address = address
				this.form.chain = chain
				this.form.name = this.chains[chain].wallets[address].name
			}
		},
		methods: {
			changeChain(type) {
				this.form.chain = type
			},
			save() {
				try {
					this.$store.commit('walletAdd', this.form)
					this.toastShow('保存成功')
					this.goBack()
				} catch (e) {
					console.log(e)
				}
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
