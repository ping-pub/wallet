<template>
	<view class="grace-face-group" :style="{height:(size + borderWidth * 2 ) +'rpx'}">
		<view class="grace-face-items" v-if="isAddBtn" 
		:style="{'z-index':1000, width:size+'rpx', height:size+'rpx', border:borderWidth + 'rpx solid ' + borderColor}" 
		@tap.stop="addBtnClick">
			<slot></slot>
		</view>
		<view class="grace-face-items" v-for="(item, index) in items" :key="index"  :style="{
			left:isAddBtn ? (space * (index+1)) + 'rpx' : (space * index) + 'rpx', 
			border:borderWidth + 'rpx solid ' + borderColor, 
			width:size+'rpx', height:size+'rpx'}">
			<image :src="item" class="grace-face-img" :style="{width:size+'rpx', height:size+'rpx'}" mode="widthFix"></image>
		</view>
	</view>
</template>
<script>
export default{
	props:{
		items : {
			type : Array,
			default : function () {
				return new Array()
			}
		},
		size : {
			type : Number,
			default : 80
		},
		space : {
			type : Number,
			default : 60
		},
		borderWidth : {
			type : Number,
			default : 4
		},
		borderColor : {
			type : String,
			default : '#F5F5F5'
		},
		isAddBtn : {
			type : Boolean,
			default : false
		}
	},
	methods:{
		addBtnClick : function () {
			this.$emit('addBtnClicked');
		}
	}
}
</script>
<style scoped>
.grace-face-group{}
.grace-face-items{width:100rpx; height:100rpx; position:absolute; overflow:hidden; border-radius:100%;}
.grace-face-img{width:100rpx;}
</style>
