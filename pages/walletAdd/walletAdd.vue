<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Add Address">
			<text style="padding: 12rpx 24rpx;" class="grace-black6">Reset</text>
		</PageTitle>

		<view slot="gBody" class="grace-body">
			<form @submit="formSubmit" class="grace-form">
				<view class="grace-items">
					<view class="grace-label">Name</view>
					<input type="text" class="input" name="name" placeholder="Please input." />
				</view>
				<view class="grace-items">
					<view class="grace-label">Address</view>
					<input type="text" class="input" name="address" placeholder="Please input." />
				</view>
				<view class="grace-items">
					<view class="grace-label">Chain</view>
					<view class="other">
						<picker @change="bindPickerChange" :value="genderIndex" :range="gender" name="gender">
							<text>{{gender[genderIndex]}}</text>
						</picker>
					</view>
				</view>

				<view style="padding:22rpx 0;">
					<button class="look-gtbg-dark f-16" formType="submit" type="primary" style="width:100%;">Save</button>
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
</style>
