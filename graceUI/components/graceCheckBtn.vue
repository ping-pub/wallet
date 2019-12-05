<template>
	<text 
	:class="['grace-check-btn', status ? 'grace-check-checked' : '']" 
	:style="{fontSize:size+'rpx', lineHeight:size+'rpx', color : status ? checkedColor : color}" 
	@tap="changeStatus"></text>
</template>
<script>
export default {
	props: {
		size : {
			type : Number,
			default : 38
		},
		color : {
			type : String,
			default : '#EEEEEE'
		},
		checked : {
			type : Boolean,
			default : false
		},
		checkedColor : {
			type : String,
			default : '#FF0036'
		},
		parameter : {
			type : Array,
			default : function () {
				return []
			}
		}
	},
	data() {
		return {
			status : false
		}
	},
	watch: {
		checked : function (val, old) {
			this.status = val;
		}
	},
	created : function(){
		this.status = this.checked;
	},
	methods:{
		changeStatus : function(){
			this.status = !this.status;
			this.$emit('change', [this.status, this.parameter]);
		}
	}
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1350962_3csfyqy98za.ttf') format('truetype');}
.grace-check-btn{font-family:"gFont"; color:#999999;}
.grace-check-btn:after{content:"\e762";}
.grace-check-checked:after{content:"\e7f8";}
</style>
