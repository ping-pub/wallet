<template>
	<view class="grace-select-tags">
		<radio-group v-if="type == 'radio'" @change="graceSelectChange">
			<label v-for="(item, index) in tagsData" :key="index" :class="[item.checked ? 'grace-checked' : '']" :style="{background : item.checked ? selectedColor + ' !important' : '#F6F7F8'}">
				<radio :value="item.value" :checked="item.checked"></radio>{{item.name}}
			</label>
		</radio-group>
		<checkbox-group v-if="type == 'checkbox'" @change="graceCheckBoxChange">
			<label v-for="(item, index) in tagsData" :key="index" :class="[item.checked ? 'grace-checked' : '']" :style="{background : item.checked ? selectedColor + ' !important' : '#F6F7F8'}">
				<checkbox :value="item.value" :checked="item.checked"></checkbox>{{item.name}}
			</label>
		</checkbox-group>
	</view>
</template>
<script>
Array.prototype.indexOf = function (val) {
	for (var i = 0; i < this.length; i++) {if (this[i] == val) return i;}
	return -1;
};
export default {
	props: {
		type : { type: String, default: ""},
		selectedColor : { type: String, default: "#3688FF"},
		items : { type: Array, default : function(){return []}}
	},
	created : function(){
		this.tagsData = this.items;
	},
	data() {
		return {
			tagsData : []
		}
	},
	methods:{
		graceSelectChange : function(e){
			var checkVal = e.detail.value;
            for (var i = 0; i < this.tagsData.length; i++) {
                if (checkVal == this.tagsData[i].value) {
                    this.tagsData[i].checked = true;
                } else {
                    this.tagsData[i].checked = false;
                }
            }
			this.$emit("change", checkVal);
		},
		graceCheckBoxChange : function(e){
		    var checkVal = e.detail.value;
            for (var i = 0; i < this.tagsData.length; i++) {
                if (checkVal.indexOf(this.tagsData[i].value) != -1) {
                    this.tagsData[i].checked = true;
                } else {
                    this.tagsData[i].checked = false;
                }
            }
			this.$emit("change", checkVal);
		}
	}
}
</script>
<style>
.grace-select-tags{padding:0;}
.grace-select-tags checkbox-group, .grace-select-tags radio-group{width:100%; display:flex; flex-wrap:wrap;}
.grace-select-tags label{display:block; width:auto; overflow:hidden; padding:18rpx 20rpx; height:30rpx; line-height:30rpx; margin:8rpx 8px 8px 0; background:#F6F7F8; font-size:24rpx; border-radius:8rpx;}
.grace-select-tags label checkbox, .grace-select-tags label radio{display:none;}
.grace-checked{ color:#FFFFFF;}
</style>