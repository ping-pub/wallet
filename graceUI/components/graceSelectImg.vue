<template>
	<view class="grace-add-list">
		<view class="items" v-for="(item, index) in imgLists" :key="index">
			<image :src="item" mode="widthFix" :data-imgurl="item" @tap="showImgs"></image>
			<view class="remove" @tap="removeImg" :id="'grace-items-img-'+index"></view>
		</view>
		<view class="items add-btn" @tap="addImg" v-if="imgLists.length < maxFileNumber">
			<view class="add-btn-add">+</view>
			<view class="add-btn-text">{{btnName}}</view>
		</view>
	</view>
</template>
<script>
export default {
	props:{
		maxFileNumber : {
			type : Number,
			default : 9
		},
		btnName : {
			type : String,
			default : "添加照片"
		},
		items : {
			type : Array,
			default : function () {
				return [];
			}
		}
	},
	data() {
		return {
			imgLists : []
		}
	},
	created:function () {
		this.imgLists = this.items;
	},
	watch:{
		imgLists : function(newVal, oldVal){
			this.$emit('change', newVal);
		}
	},
    methods:{
        addImg : function(){
			var _self = this;
            var num = this.maxFileNumber - _self.imgLists.length;
            if(num < 1){return false;}
            uni.showLoading({title:""});
            uni.chooseImage({
                count: num,
                sizeType: ['compressed'],
                success: function(res) {
                    _self.imgLists = _self.imgLists.concat(res.tempFilePaths);
                    uni.hideLoading();
                },
				fail:function(){
					uni.hideLoading();
				}
            });
        },
        removeImg : function(e){
            var index = e.currentTarget.id.replace('grace-items-img-', '');
            this.imgLists.splice(index, 1);
        },
        showImgs : function(e){
            var currentImg = e.currentTarget.dataset.imgurl;
            uni.previewImage({
              urls: this.imgLists,
              current : currentImg
            })
        }
    }
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1350431_mx2yuzh35rh.ttf') format('truetype');}
.grace-add-list{display:flex; flex-wrap:wrap;}
.grace-add-list .add-btn{display:flex; flex-direction:column; align-items:center; justify-content:center;}
.grace-add-list .add-btn-text{font-size:26rpx; line-height:36rpx; text-align:center; color:#999999; width:100%;}
.grace-add-list .add-btn-add{font-size:100rpx !important; height:80rpx; line-height:80rpx; margin-bottom:20rpx; color:#999999;}
.grace-add-list > .items{width:220rpx; height:220rpx; overflow:hidden; margin:5px 0; background:#F3F4F5; font-size:0; position:relative; border-radius:10rpx; margin-right:13rpx;}
.grace-add-list > .items image{width:220rpx;}
.grace-add-list > .items .remove{font-family:"gFont"; width:50rpx; height:50rpx; line-height:50rpx; text-align:center; font-size:40rpx; position:absolute; z-index:1; right:0; bottom:0; background:rgba(0,0,0, 0.5); color:#FFFFFF;}
.grace-add-list > .items .remove:after{content: "\e600";}
</style>