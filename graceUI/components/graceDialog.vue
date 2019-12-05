<template>
	<view>
		<view class="grace-dialog-shade" v-if="show" @tap.stop="closeDialog" @touchmove.stop="stopFun">
			<view class="dialog gdFadeIn" @tap.stop="stopFun" :style="{width:width}">
				<view class="title" v-if="isTitle">{{title}}</view>
				<view class="content" @tap.stop="stopFun"><slot name="content"></slot></view>
				<view class="close-btn" :style="{color:closeBtnColor}" v-if="isCloseBtn" @tap.stop="closeDialog"></view>
				<view class="btns" v-if="isBtns"><slot name="btns"></slot></view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	name: "graceDialog",
	props: {
		show : {
			type : Boolean,
			default : false
		},
		width : {
			type : String,
			default : '85%'
		},
		isCloseBtn: {
			type : Boolean,
			default : true
		},
		closeBtnColor : {
			type : String,
			default : '#F90000'
		},
		isTitle : {
			type : Boolean,
			default : true
		},
		title : {
			type : String,
			default : ''
		},
		isBtns : {
			type : Boolean,
			default : true
		}
	},
	data() {
		return {
			
		}
	},
	methods:{
		closeDialog : function(){
			this.$emit('closeDialog');
		},
		stopFun : function(){}
	}
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1348600_ndhd2fow1h.ttf') format('truetype');}
@keyframes gdFadeIn{ from { opacity: 0; } 100% { opacity: 1; }}
.gdFadeIn {animation:gdFadeIn 200ms linear;}
.grace-dialog-shade{position:fixed; width:100%; height:100%; left:0; top:0; z-index:9991; background:rgba(0, 0, 0, 0.5);}
.grace-dialog-shade .dialog{width:85%; height:auto; background:#FFFFFF; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); z-index:9992; border-radius:5px;}
.grace-dialog-shade .title{line-height:100rpx; height:100rpx; font-size:30rpx; text-align:center;}
.grace-dialog-shade .content{width:100%;}
.grace-dialog-shade .close-btn{position:absolute; z-index:9993; right:0px; top:0px; font-size:26rpx; width:100rpx; height:100rpx; line-height:100rpx; text-align:center; font-family:"gFont";}
.grace-dialog-shade .close-btn:before{content:"\e643";}
.grace-dialog-shade .btns{width:100%;}
</style>