<template>
	<view class="grace-add-list">
		<view class="items" v-for="(item, index) in imgLists" :key="index">
			<image :src="item.url" mode="widthFix" :data-imgurl="item.url" @tap="showImgs"></image>
			<view class="remove" @tap="removeImg" :id="'grace-items-img-'+index"></view>
			<view class="show-progress">
			   <progress :percent="item.progress" stroke-width="2" activeColor="#27BD81" backgroundColor="#F8F8F8" />	
			</view>
		</view>
		<view class="items add-btn" @tap="addImg" v-if="imgLists.length < maxFileNumber && canadd">
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
		},
		uploading : {
			type  : Boolean,
			default : false
		},
		uploadServerUrl : {
			type  : String,
			default : ""
		},
		canadd : {
			type : Boolean,
			default : true
		}
	},
	data() {
		return {
			imgLists : [],
			uploadindex : 0
		}
	},
	created:function () {
		this.imgLists = this.items;
	},
	watch:{
		imgLists : function(newVal, oldVal){
			this.$emit('change', newVal);
		},
		uploading : function(newVal, oldVal){
			if(newVal && !oldVal){this.upload(this, 0);}
		}
	},
    methods:{
		upload : function (_self, index) {
			//
			if(index > (_self.imgLists.length - 1)){
				//全部上传完成
				var uploadedims = [];
				_self.imgLists.forEach(function(item, k){
					uploadedims.push(item.url);
				});
				this.$emit('uploaded', uploadedims);
				return ;
			}
			var tmpImg = _self.imgLists[index];
			if(tmpImg.progress != 0){index++; _self.upload(_self, index); return ;}
			// 检查上传域名
			if(_self.uploadServerUrl == ''){uni.showToast({title:"请设置上传服务器地址", icon:"none"}); return ;}
			// 创建上传对象
			const task = uni.uploadFile({
				url: _self.uploadServerUrl,
				filePath: tmpImg.url,
				name: 'img',
				success: function(uploadRes){
					uploadRes = JSON.parse(uploadRes.data);
					if(uploadRes.status != 'ok'){
						_self.resetprogress(index);
						uni.showToast({title:uploadRes.data, icon:"none"});
						_self.uploadFail();
					}else{
						//上传图片成功
						_self.imgLists[index].url = uploadRes.data;
						setTimeout(function(){index++; _self.upload(_self, index);}, 1000);
					}
				},
				fail:function(e) {
					_self.resetprogress(index);
					uni.showToast({title:"上传图片失败,请重试", icon:"none"});
					_self.uploadFail();
				}
			});
			task.onProgressUpdate(function(res){
				_self.imgLists[index].progress = res.progress;
			});
		},
        addImg : function(){
			var _self = this;
            var num = this.maxFileNumber - _self.imgLists.length;
            if(num < 1){return false;}
            uni.showLoading({title:""});
            uni.chooseImage({
                count: num,
                sizeType: ['compressed'],
                success: function(res) {
					res.tempFilePaths.forEach(function(imgs, index) {
						_self.imgLists.push({
							url : imgs,
							progress : 0
						});
					});
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
			var prvImgs = [];
			this.imgLists.forEach(function(item, key){
				prvImgs.push(item.url);
			});
            var currentImg = e.currentTarget.dataset.imgurl;
            uni.previewImage({
              urls: prvImgs,
              current : currentImg
            })
        },
		uploadFail : function () {
			this.$emit('uploaderror');
		},
		//重置进度
		resetprogress : function (index) {
			setTimeout(()=>{this.imgLists[index].progress = 0;}, 1000);
		}
    }
}
</script>
<style>
@font-face {font-family:"gFont"; src:url('https://at.alicdn.com/t/font_1350431_73a79xoewq7.ttf') format('truetype');}
.grace-add-list{display:flex; flex-wrap:wrap;}
.grace-add-list .add-btn{display:flex; flex-direction:column; align-items:center; justify-content:center;}
.grace-add-list .add-btn-text{font-size:26rpx; line-height:36rpx; text-align:center; color:#999999; width:100%;}
.grace-add-list .add-btn-add{font-size:100rpx !important; height:80rpx; line-height:80rpx; margin-bottom:20rpx; color:#999999;}
.grace-add-list > .items{width:220rpx; height:220rpx; overflow:hidden; margin:5px 0; background:#F3F4F5; font-size:0; position:relative; border-radius:10rpx; margin-right:13rpx;}
.grace-add-list > .items image{width:220rpx;}
.grace-add-list > .items .remove{font-family:"gFont"; width:50rpx; height:50rpx; line-height:50rpx; text-align:center; font-size:22rpx; border-radius:50rpx; position:absolute; z-index:1; right:5rpx; top:5rpx; background:rgba(0,0,0, 0.5); color:#FFFFFF;}
.grace-add-list > .items .remove:after{content: "\e6dd";}
.show-progress{position:absolute; z-index:2; left:0; bottom:10rpx; width:86%; padding:0 7%;}
</style>