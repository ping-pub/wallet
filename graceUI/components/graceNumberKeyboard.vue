<template>
	<view>
		<view class="grace-mask" @tap="done" v-if="show"></view>
		<view class="grace-keyboard" v-if="show">
			<view class="keys-left">
				<view class="keys" data-keynumber="1" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">1</view>
				<view class="keys" data-keynumber="2" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">2</view>
				<view class="keys" data-keynumber="3" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">3</view>
				<view class="keys" data-keynumber="4" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">4</view>
				<view class="keys" data-keynumber="5" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">5</view>
				<view class="keys" data-keynumber="6" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">6</view>
				<view class="keys" data-keynumber="7" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">7</view>
				<view class="keys" data-keynumber="8" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">8</view>
				<view class="keys" data-keynumber="9" hover-class="keydown" :hover-stay-time="100" @tap="inputNow">9</view>
				<view class="keys" style="width:259rpx;" hover-class="keydown" :hover-stay-time="100" data-keynumber="0" @tap="inputNow">0</view>
				<view class="keys" style="width:259rpx;" hover-class="keydown" :hover-stay-time="100" data-keynumber="." @tap="inputNow">.</view>
			</view>
			<view class="keys-right">
				<view class="keys graceNumberKeyboardFont-delete" hover-class="keydown" :hover-stay-time="100" @tap="deleteNow"></view>
				<view class="keys grace-keyboard-done" @tap="done">{{doneBtnName}}</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		show : {
			type : Boolean,
			default : false
		},
		doneBtnName : {
			type : String,
			default : "完成"
		}
	},
	methods: {
		inputNow : function (e){
			var k = e.currentTarget.dataset.keynumber;
			this.$emit('keyboardInput', k);
		},
		deleteNow : function (){
			this.$emit('keyboardDelete');
		},
		done : function(){
			this.$emit('keyboardDone');
		}
	},
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1348701_jjwmoshd3l.ttf') format('truetype');}
.graceNumberKeyboardFont-delete:before {font-family: "gFont" !important; content:"\e605";}
.grace-mask{background:rgba(255, 255, 255, 0); position:fixed; width:100%; height:100%; left:0; top:0; z-index:1;}
.grace-keyboard{background:#F4F5F6; position:fixed; width:100%; height:auto; left:0; bottom:0; z-index:99; padding:10px 0;}
.grace-keyboard .keys-left{width:562rpx; float:left;}
.grace-keyboard .keys-right{width:187rpx; float:right;}
.grace-keyboard .keys{width:166rpx; height:100rpx; margin:10rpx; float:left; background:#FFFFFF; text-align:center; line-height:100rpx; border-radius:8rpx; font-weight:700; font-size:50rpx;}
.grace-keyboard-done{height:340rpx !important; line-height:340rpx !important; font-size:36rpx !important; font-weight:400 !important; background:#00C777 !important; color:#FFFFFF !important;}
.keydown{background:#00C777 !important; color:#FFFFFF !important;}
</style>