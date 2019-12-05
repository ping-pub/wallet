<template name="gracePopupMenu">
	<view>
		<view class="grace-popup-mask" v-if="show" @tap.stop="hideMenu"></view>
		<view class="grace-popup-menu" v-if="show" :style="{top:top+'px', background:bgColor, width:menuWidth}">
			<slot></slot>
		</view>
	</view>
</template>
<script>
	export default {
		name: "gracePopupMenu",
		props: {
			show:{
				type : Boolean,
				default : false
			},
			top:{
				type : Number,
				default : 0
			},
			bgColor:{
				type : String,
				default :'#F0F0F0'
			},
			menuWidth :{
				type : String,
				default : '258rpx'
			}
		},
		methods: {
			hideMenu : function() {
				this.$emit('hideMenu');
			}
		},
	}
</script>
<style>
.grace-popup-menu{background:#F0F0F0; width:258rpx; padding:10rpx; right:0px; top:0px; position:absolute; z-index:9999; border-radius:6rpx;}
.grace-popup-mask{background:rgba(0,0,0, 0.3); width:100%; height:100%; position:fixed; left:0; top:0; z-index:9998;}
</style>