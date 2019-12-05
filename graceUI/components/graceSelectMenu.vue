<template>
	<view class="grace-select-menu-wrap">
		<view class="grace-select-menu-title" @click.stop="showMenu" id="menuMain">
			<text>{{items[currentIndex]}}</text>
			<text class="icon icon-allow-b" v-if="!show"></text>
			<text class="icon icon-allow-t" v-if="show"></text>
		</view>
		<view class="grace-select-menu" :style="{top : top +'px'}" @click.stop="close" @touchmove.stop="" v-if="show">
			<view style="height:92rpx; width:100%;"></view>
			<scroll-view scroll-y class="grace-select-menus" :style="{height:height+'rpx'}">
				<view 
				:class="['grace-select-item', index == currentIndex ? 'grace-selected' : '']" v-for="(item, index) in items" 
				:style="{color : index == currentIndex ? activeColor : color}"
				:key="index" :data-index="index" @click.stop="select">
					<text class="grace-selected-icon" v-if="index == currentIndex"></text>
					<text>{{item}}</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
export default {
	props:{
		items : {
			type : Array,
			default : function () {
				return []
			}
		},
		show : {
			type : Boolean,
			default : false
		},
		height : {
			type : Number,
			default : 300
		},
		color : {
			type : String,
			default : "#333333"
		},
		activeColor : {
			type : String,
			default : "#3688FF"
		},
		selectIndex : {
			type : Number,
			default : 0
		},
		isH5header : {
			type : Boolean,
			default : true
		}
	},
	data() {
		return {
			currentIndex : 0,
			top : 0
		}
	},
	created : function () {
		this.currentIndex = this.selectIndex;
	},
	methods:{
		showMenu:function () {
			var _self = this;
			uni.createSelectorQuery().in(this).select('#menuMain').fields(
				{rect: true}, function (res){
					console.log(res);
					_self.top = res.top;
					// #ifdef H5
					if(_self.isH5header){ _self.top += 44; }
					// #endif
				}
			).exec();
			this.$emit('showMenu');
		},
		close : function(){
			this.$emit('close');
		},
		select : function(e){
			var index = Number(e.currentTarget.dataset.index);
			this.currentIndex = index;
			this.$emit('select', index);
			this.close();
		}
	}
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1352692_tikrk94s8ud.ttf') format('truetype');}
.grace-select-menu-wrap{width:100%; position:relative;}
.grace-select-menu-title{height:90rpx; line-height:90rpx; font-size:28rpx; color:#333333; width:100%; text-align:center;}
.grace-select-menu-title > .icon{font-family:"gFont"; margin-left:10rpx; font-size:22rpx; }
.grace-select-menu-title > .icon-allow-b:after{content: "\e608";}
.grace-select-menu-title > .icon-allow-t:after{content: "\e6a7";}
.grace-select-menu{position:fixed; width:750rpx; left:0; top:0; bottom:0; background-color:rgba(255, 255, 255, 0); z-index:99999;}
.grace-select-menus{height:260rpx; background:#FFFFFF; padding:0;}
.grace-select-item{line-height:100rpx; height:100rpx; width:700rpx; padding:0 25rpx; font-size:28rpx; color:#333333; border-bottom:1px solid #F8F8F8;}
.grace-select-item:last-child{border:0;}
.grace-selected{font-weight:bold;}
.grace-selected-icon{margin:0 15rpx 0 0; font-family:"gFont"; font-size:28rpx;}
.grace-selected-icon:after{content: "\e618";}
</style>