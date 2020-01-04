<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="添加主链" :toast="toast" :msg="msg" :loading="loading">
			<text class="cuIcon-roundcheck"></text>
		</PageTitle>

		<view slot="gBody">
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
					<view class="title">主链名称</view>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">图标地址</view>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">lcd 服务器地址</view>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入" name="input" v-model="form.lcd"></input>
				</view>
			</form>
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">支持版本</text>
				</view>
				<view class="action" @tap="fetchNodeInfo">
					<text class="cuIcon-refresh" style="font-size: 14px;"></text>
					<text class="text-sm" style="margin-left: 4rpx;">获取版本</text>
				</view>
			</view>
			<view class="bg-white">
				<view class="grid col-3 padding-sm">
					<view class="padding-xs">
						<button class="cu-btn lg block" :class="{ 'line-grey': '0.32.7' !== form.version, 'bg-black': '0.32.7' === form.version }"  style="border-radius: 4rpx;">0.32.7<view class="cu-tag badge bg-gradual-blue">推荐</view></button>
					</view>
					<view class="padding-xs">
						<button  class="cu-btn lg block" :class="{ 'line-grey': '0.32.1' !== form.version, 'bg-black': '0.32.1' === form.version }" style="border-radius: 4rpx;"> 0.32.1 </button>
					</view>
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
		data() {
			return {
				form: {
					name: '',
					version: '0.32.7',
					logo: '',
					lcd: ''
				}
			}
		},
		methods: {
			async fetchNodeInfo() {
				if (!this.form.lcd) {
					this.toastShow('请输入 lcd 服务器地址')
					return
				}
				this.loading = true
				const res = await this.$api().nodeInfo(this.form.lcd).catch(() => { this.loading = false})
				this.loading = false
				// https://rpc.irisnet.org
				// https://kava-relay.01node.com
				this.form.version = res
			}
		}
	}
</script>
<style>
	.walletcreate-chainitem {
		background: #fff;padding: 20rpx 0;border: 2rpx solid #fff;
	}
	.walletcreate-chainitem-active {
		background: #eee;padding: 20rpx 0;border: 2rpx solid #333333;
	}
</style>
