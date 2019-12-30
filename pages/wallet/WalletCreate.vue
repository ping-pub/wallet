<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="编辑钱包">
			<view class="">
				<text class="cuIcon-roundcheck mr-6"></text>
				<text>保存</text>
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
				<view class="cu-list grid col-4 no-border" style="padding: 20rpx 40rpx;">
					<view class="cu-item walletcreate-chainitem-active" style="padding-top: 20rpx;">
						<image src="../../static/wallet/cosmoshub.svg" class="shadow" style="width: 56rpx;height: 56rpx;margin: 0 auto;" mode=""></image>
						<text style="color: #333333;">Cosmos</text>
					</view>
					<view class="cu-item walletcreate-chainitem" style="padding-top: 20rpx;">
						<image src="../../static/wallet/kava.svg" style="width: 56rpx;height: 56rpx;margin: 0 auto;" mode=""></image>
						<text style="color: #333333;">Kava</text>
					</view>
					<view class="cu-item walletcreate-chainitem" style="padding-top: 20rpx;">
						<image src="../../static/wallet/irishub.svg" style="width: 56rpx;height: 56rpx;margin: 0 auto;" mode=""></image>
						<text style="color: #333333;">Iris</text>
					</view>
					<view class="cu-item walletcreate-chainitem" style="padding-top: 20rpx;">
						<image src="../../static/wallet/asset3.png" style="width: 56rpx;height: 56rpx;margin: 0 auto;" mode=""></image>
						<text style="color: #333333;">Cell</text>
					</view>
				</view>
			</view>
			
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">钱包资料</text>
				</view>
				<view class="action"></view>
			</view>
			<form>
				<view class="cu-form-group">
					<view class="title">钱包名称</view>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">钱包地址</view>
					<text class="cuIcon-copy"></text>
				</view>
				<view class="cu-form-group">
					<textarea maxlength="-1" placeholder="请输入钱包地址"></textarea>
				</view>
			</form>
		</view>
	</gracePage>
</template>
<script>
	var graceChecker = require("../../graceUI/jsTools/graceChecker.js");
	export default {
		data() {
			return {
				radio: 'B',
				genderIndex: 0,
				gender: ['Cosmos', 'Kava', 'Iris', 'Cell'],
				dateValue: null
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log(e);
				this.genderIndex = e.detail.value;
			},
			bindDateChange: function(e) {
				this.dateValue = e.detail.value;
			},
			formSubmit: function(e) {
				//定义表单规则
				var rule = [{
						name: "nickname",
						checkType: "string",
						checkRule: "1,3",
						errorMsg: "姓名应为1-3个字符"
					},
					{
						name: "gender",
						checkType: "in",
						checkRule: "1,2",
						errorMsg: "请选择性别"
					},
					{
						name: "bd",
						checkType: "notsame",
						checkRule: "请选择",
						errorMsg: "请选择生日"
					},
					{
						name: "aihao",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请选择爱好"
					},
					{
						name: "email",
						checkType: "email",
						checkRule: "",
						errorMsg: "请填写您的邮箱"
					}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
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
