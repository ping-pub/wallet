<template>
	<view class="grace-body">
		<view class="grace-list grace-margin-top">
			<view class="items" @tap="showDialog1">
				<view class="body">
					<view class="title">普通形式的对话框<text>点击测试</text></view>
				</view>
			</view>
			<view class="items" @tap="showDialog2">
				<view class="body">
					<view class="title">图片形式的对话框<text>点击测试</text></view>
				</view>
			</view>
			<view class="items" @tap="showDialog3">
				<view class="body">
					<view class="title">单选形式的对话框<text>点击测试</text></view>
				</view>
			</view>
		</view>
		<graceBottomDialog :show="show1" v-on:closeDialog="closeDialog1">
			<view slot="btns">
				<view class="grace-btdialog-btns">
					<view @tap="closeDialog1">取消</view>
					<view style="color:#00B26A;" @tap="confirm1">确定</view>
				</view>
			</view>
			<view slot="content">
				<view class="content1">普通文本提示 ^_^</view>
			</view>
		</graceBottomDialog>
		
		<graceBottomDialog :show="show2" v-on:closeDialog="closeDialog2">
			<view slot="btns">
				<view class="grace-btdialog-btns">
					<view @tap="closeDialog2">取消</view>
					<view style="color:#00B26A;" @tap="confirm2">确定</view>
				</view>
			</view>
			<view slot="content">
				<view class="content2">
					<image src="https://graceui.oss-cn-beijing.aliyuncs.com/big.png" style="width:100%;" mode="widthFix"></image>
				</view>
			</view>
		</graceBottomDialog>
		
		<graceBottomDialog :show="show3" v-on:closeDialog="closeDialog3">
			<view slot="btns">
				<view class="grace-btdialog-btns">
					<view @tap="closeDialog3">取消</view>
					<view style="color:#3688FF;" @tap="confirm3">打赏</view>
				</view>
			</view>
			<view slot="content">
				<view class="grace-select-tags" style="background:#F8F8F8;">
					<radio-group @change="graceSelectChange" name="tipName2">
						<label v-for="(item, index) in shang" :key="index" :class="[item.checked ? 'grace-checked' : '']">
							<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
						</label>
					</radio-group>
				</view>
			</view>
		</graceBottomDialog>
	</view>
</template>
<script>
import graceBottomDialog from '../../graceUI/components/graceBottomDialog.vue';
// 可选标签的 js 扩展
Array.prototype.indexOf = function (val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};
export default {
	data() {
		return {
			show1 : false,
			show2 : false,
			show3 : false,
			
			// 可选标签的数据
			shang: [
                { name: '10元', value: '10', checked: true },
                { name: '20元', value: '20', checked: false },
				{ name: '50元', value: '50', checked: false },
				{ name: '100元', value: '100', checked: false },
				{ name: '200元', value: '200', checked: false },
				{ name: '500元', value: '500', checked: false }
            ],
			// 记录客户选择的金额
			shangPrice : 10
		};
	},
	components : {
		graceBottomDialog : graceBottomDialog
	},
	methods :{
		
		// 第1个演示 [ 普通 ]
		showDialog1 : function(){
			this.show1 = true;
		},
		closeDialog1 : function(){
			this.show1 = false;
		},
		confirm1 : function(){
			this.closeDialog1();
			uni.showToast({title:"您点击了确认按", icon:"none"});
		},
		
		// 第2个演示 [ 图片 ]
		showDialog2 : function(){
			this.show2 = true;
		},
		closeDialog2 : function(){
			this.show2 = false;
		},
		confirm2 : function(){
			this.closeDialog2();
			uni.showToast({title:"您点击了确认按", icon:"none"});
		},
		
		// 第3个演示 [ 单选 ]
		showDialog3 : function(){
			this.show3 = true;
		},
		closeDialog3 : function(){
			this.show3 = false;
		},
		confirm3 : function(){
			this.closeDialog3();
			uni.showToast({title:"打赏金额 ￥"+this.shangPrice, icon:"none"});
		},
		
		// 可选标签的js
		graceSelectChange: function (e) {
		    var checkVal = e.detail.value;
			this.shangPrice = checkVal;
			console.log("客户选择的值 : " + checkVal);
		    for (var i = 0; i < this.shang.length; i++) {
		        if (checkVal == this.shang[i].value) {
		            this.shang[i].checked = true;
		        } else {
		            this.shang[i].checked = false;
		        }
		    }
		    this.shang = this.shang;
		}
	}
}
</script>
<style>
/* demo */
.content1{padding:20rpx; text-align:center; line-height:100rpx; background:#F8F8F8; border-bottom-left-radius:10rpx; border-bottom-right-radius:10rpx;}
/* 图片形式 */
.content2{font-size:0;}
.content2 image{width:100%;}
/* 单选 */
.grace-select-tags{padding:30upx;}
.grace-select-tags checkbox-group, .grace-select-tags radio-group{width:100%; display:flex; flex-wrap:wrap;}
.grace-select-tags label{display:block; width:31.3%; overflow:hidden; padding:20upx 0; text-align:center; height:30upx; line-height:30upx; margin:6px 1%; background:#FFFFFF; font-size:26upx; border-radius:8upx;}
.grace-select-tags label checkbox, .grace-select-tags label radio{display:none;}
.grace-checked{background:#E76B61 !important; color:#FFFFFF;}
</style>