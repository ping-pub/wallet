<template>
	<view class="gui-segmented-Control" :style="{height:height, border:border, borderColor:color}">
		<view class="gsc-item" v-for="(item, index) in items" :key="index" 
		:style="{height:height, lineHeight:height, color:current == index ? '#FFFFFF' : color, background:current == index ? color : '', fontSize:fontSize}" 
		@tap.stop="changeSC" :data-index="index">{{item}}</view>
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
		height : {
			type : String,
			default : '60rpx'
		},
		border : {
			type : String,
			default : '1px solid #3688FF'
		},
		color : {
			type : String,
			default : '#3688FF'
		},
		fontSize : {
			type : String,
			default : '28rpx'
		},
		current : {
			type : Number,
			default : 0
		}
	},
	methods:{
		changeSC:function (e) {
			this.$emit('change', Number(e.currentTarget.dataset.index));
		}
	}
}
</script>
<style>
.gui-segmented-Control{display:flex; flex-direction:row; flex-wrap:nowrap; border-radius:100px;}
.gui-segmented-Control .gsc-item{width:700rpx; text-align:center;}
.gui-segmented-Control .gsc-item:first-child{border-top-left-radius:100px; border-bottom-left-radius:100px;}
.gui-segmented-Control .gsc-item:last-child{border-top-right-radius:100px; border-bottom-right-radius:100px;}
</style>
