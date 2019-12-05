<template name="graceNumberBox">
	<view class="grace-number-box">
		<view class="doBtn" @tap="reduce">-</view>
		<view style="width:100rpx;">
			<input type="number" :value="inputNumber" :disabled="disabled" @blur="blur"></input>
		</view>
		<view class="doBtn" @tap="add">+</view>
	</view>
</template>
<script>
export default {
	name: "graceNumberBox",
	props: {
		disabled :{
			type : Boolean,
			default : false
		},
		value : {
			type : Number,
			default : 0 
		},
		index : {
			type : Number,
			default : 0
		},
		maxNum:{
			type: Number,
			default: 20
		},
		minNum: {
			type: Number,
			default: 1
		},
		datas:{
			type: String,
			default: ''
		}
	},
	data() {
		return {
			inputNumber: this.value
		}
	},
	watch:{
		value (val){
			this.inputNumber = val;
		},
		inputNumber (val){
			val = Number(val);
			if(val > this.maxNum){val = this.maxNum; this.inputNumber = val;}
			if(val < this.minNum){val = this.minNum; this.inputNumber = val; console.log(11)}
			this.$emit('change', [val, this.index, this.datas]);
		}
	},
	methods: {
		add : function(){
			var newVal = this.inputNumber + 1;
			this.inputNumber = Number(newVal);
		},
		reduce: function () {
			var newVal = this.inputNumber - 1;
			this.inputNumber = newVal;
		},
		blur : function(e){
			this.inputNumber = Number(e.detail.value);
		}
  }
}
</script>
<style>
.grace-number-box{width:200rpx; height:66rpx; display:flex; overflow:hidden; flex-wrap:nowrap; align-items:center;}
.grace-number-box .doBtn{width:60rpx; line-height:60rpx; height:66rpx; text-align:center; font-size:36rpx; color:#666666; flex-shrink:0;}
.grace-number-box input{height:30rpx; line-height:30rpx !important; color:#333; font-size:26rpx; padding:10rpx 0; background:#F1F2F3; text-align:center; border-radius:6rpx !important;}
</style>