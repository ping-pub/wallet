<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="添加主链">
			<text class="cuIcon-roundcheck"></text>
		</PageTitle>

		<view slot="gBody">
			<view class="page-space"></view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-black"></text>
					<text class="text-xl text-bold">内核版本</text>
				</view>
				<view class="action"></view>
			</view>
			<view class="bg-white">
				<view class="grid col-3 padding-sm">
					<view class="padding-xs">
						<button class="cu-btn orange lg block bg-black" style="border-radius: 4rpx;">0.23.8<view class="cu-tag badge bg-gradual-blue">推荐</view></button>
					</view>
					<view class="padding-xs" v-for="n in 5" :key="n">
						<button class="cu-btn orange lg block line-grey" style="border-radius: 4rpx;"> 0.23.0 </button>
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
					<view class="title">主链名称</view>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">lcd 服务器地址</view>
					<text class="cuIcon-copy"></text>
				</view>
				<view class="cu-form-group">
					<input placeholder="请输入" name="input"></input>
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
