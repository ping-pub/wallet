<template name="graceCountDown">
	<view class="grace-countdown">
		<view class="grace-countdown-numbers" :style="{borderColor:borderColor, width:width, height:width, fontSize:fontSize, lineHeight:width, color:fontColor, background:bgrColor}" v-if="d > 0">{{d}}</view>
		<view class="grace-countdown-splitor" :style="{color:splitorColor, lineHeight:width, fontSize:fontSize}" v-if="d > 0">{{splitorText[0]}}</view>
		<view class="grace-countdown-numbers" :style="{borderColor:borderColor, width:width, height:width, fontSize:fontSize, lineHeight:width, color:fontColor, background:bgrColor}">{{h}}</view>
		<view class="grace-countdown-splitor" :style="{color:splitorColor, lineHeight:width, fontSize:fontSize}">{{splitorText[1]}}</view>
		<view class="grace-countdown-numbers" :style="{borderColor:borderColor, width:width, height:width, fontSize:fontSize, lineHeight:width, color:fontColor, background:bgrColor}">{{i}}</view>
		<view class="grace-countdown-splitor" :style="{color:splitorColor, lineHeight:width, fontSize:fontSize}">{{splitorText[2]}}</view>
		<view class="grace-countdown-numbers" :style="{borderColor:borderColor, width:width, height:width, fontSize:fontSize, lineHeight:width, color:fontColor, background:bgrColor}">{{s}}</view>
		<view class="grace-countdown-splitor" :style="{color:splitorColor, lineHeight:width, fontSize:fontSize}">{{splitorText[3]}}</view>
	</view>
</template>
<script>
export default {
	name: "graceCountDown",
	props: {
		bgrColor: {
			type: String,
			default: "#FFFFFF"
		},
		borderColor:{
			type:String,
			default : "#000000"
		},
		fontColor: {
			type: String,
			default: "#000000"
		},
		fontSize: {
			type: String,
			default: "22rpx"
		},
		splitorColor: {
			type: String,
			default: "#000000"
		},
		timer:{
			type:String,
			default:""
		},
		width : {
			type:String,
			default:"40rpx"
		},
		splitorText : {
			type : Array,
			default : function () {
				return [':', ':', ':', '']
			}
		}
	},
	data() {
		return {
			d : 0,
			h : "00",
			i : "00",
			s : "00",
			leftTime: 0,
			timerInter : null
		}
	},
	created:function(e){
		var reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
		var res = this.timer.match(reg);
		if (res == null){
			console.log('时间格式错误'); return false;
		}else{
			var year = parseInt(res[1]);
			if (year < 1000) { console.log('时间格式错误'); return false; }
			var month = parseInt(res[2]);
			var day = parseInt(res[3]);
			var h = parseInt(res[4]);
			if (h < 0 || h > 24) { console.log('时间格式错误'); return false; }
			var i = parseInt(res[5]);
			if (i < 0 || i > 60) { console.log('时间格式错误'); return false; }
			var s = parseInt(res[6]);
			if (s < 0 || s > 60) { console.log('时间格式错误'); return false; }
			var leftTime = new Date(year, month - 1, day, h, i, s);
			this.leftTime = leftTime;
			this.countDown(this);
			this.setInterValFunc(this);
		}
	},
	methods: {
		setInterValFunc:function(obj){
			obj.timerInter = setInterval(function(){ obj.countDown(obj);}, 1000);
		},
		countDown: function (self){
			var leftTime = self.leftTime - new Date();
			if (leftTime > 0) {
				var day   =  parseInt(leftTime / (1000 * 60 * 60 * 24));
				var hours = parseInt((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = parseInt((leftTime % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = parseInt((leftTime % (1000 * 60)) / 1000);	  
			}else{
				var hours = 0, minutes = 0, seconds = 0;
				clearTimeout(self.timerInter);
				self.$emit('endDo');
			}
			if (hours < 10) { hours = '0' + hours;}
			if (minutes < 10) { minutes = '0' + minutes; }
			if (seconds < 10) { seconds = '0' + seconds; }
			self.h = hours; self.i = minutes; self.s = seconds; self.d = day;
		}
	}
}
</script>
<style>
.grace-countdown{display:flex; flex-wrap:nowrap; justify-content:center;}
.grace-countdown-splitor{justify-content:center; padding:0 5rpx;}
.grace-countdown-numbers{border-radius:8rpx; margin:0 5rpx; text-align:center; border:1px solid #000000; font-size:22rpx;}
</style>