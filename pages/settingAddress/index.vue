<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="Address Book">
			<text style="padding: 12rpx 24rpx;" class="grace-black6 look-app-icon look-app-icon-save"></text>
		</PageTitle>
		<view slot="gBody" class="grace-body">
			<view class="grace-border" style="width:100%; margin:0;">
				<view class="grace-search-in">
					<view class="icons grace-icons icon-search"></view>
					<view class="input"><input type="search" @input="searchChange" placeholder="搜索" /></view>
				</view>
			</view>
			<scroll-view scroll-y="true" :scroll-into-view="showId" class="gui-address-book-scview" :style="{height:scHeight+'px'}">
				<block v-for="(item, index) in addresses" :key="index">
					<view class="a-z" :id="'AZ-'+index">{{index}}</view>
					<view class="grace-list">
						<view class="items" v-for="(add, index2) in item" :key="index2" :id="'show-'+index+index2">
							<view class="icons">
								<image :src="add.face" mode="widthFix"></image>
							</view>
							<view class="body">
								<view class="title">{{add.name}}</view>
								<view class="desc">{{add.phoneno}}</view>
							</view>
							<view class="right-btn grace-space-between">
								<text class="btn grace-icons icon-tel"></text>
								<text class="btn grace-icons icon-comments"></text>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<view class="gui-address-book-az">
				<view v-for="(char, index) in AZ" :key="index" :data-char="char" @tap="changAZ">{{char}}</view>
			</view>
		</view>

	</gracePage>
</template>
<script>
	import graceHeader from '../../graceUI/components/graceHeader.vue';
	var systemInfo = require('../../graceUI/jsTools/systemInfo.js');
	export default {
		data() {
			return {
				scHeight: 500,
				showId: '',
				AZ: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
					'W', 'X', 'Y', 'Z'
				],
				addresses: {
					A: [{
							face: "http://img5.imgtn.bdimg.com/it/u=263351484,3972010013&fm=26&gp=0.jpg",
							name: '安晓林',
							phoneno: "18109558858"
						},
						{
							face: "http://img1.imgtn.bdimg.com/it/u=3390282514,1409134585&fm=26&gp=0.jpg",
							name: '艾莉莉',
							phoneno: "15109502311"
						}
					],
					B: [{
							face: "http://img4.imgtn.bdimg.com/it/u=3371600744,3811242420&fm=26&gp=0.jpg",
							name: '波哥哥',
							phoneno: "1680088788"
						},
						{
							face: "https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png",
							name: '博哥',
							phoneno: "1300000001"
						}
					],
					C: [{
							face: "http://img2.imgtn.bdimg.com/it/u=1238567660,881150196&fm=26&gp=0.jpg",
							name: 'cliean ya',
							phoneno: "1680088788"
						},
						{
							face: "http://img2.imgtn.bdimg.com/it/u=158036347,4141243511&fm=26&gp=0.jpg",
							name: 'clonck',
							phoneno: "1300000001"
						}
					],
					D: [{
							face: "http://img4.imgtn.bdimg.com/it/u=295280684,1051318190&fm=26&gp=0.jpg",
							name: '丁博',
							phoneno: "1790088723"
						},
						{
							face: "http://img0.imgtn.bdimg.com/it/u=1102168808,3824647196&fm=26&gp=0.jpg",
							name: 'clonck',
							phoneno: "16998588895"
						}
					],
					F: [{
							face: "http://img3.imgtn.bdimg.com/it/u=2922618769,3783189426&fm=26&gp=0.jpg",
							name: 'Fly ZBoy',
							phoneno: "1790088723"
						},
						{
							face: "http://img4.imgtn.bdimg.com/it/u=2805911121,3247155779&fm=26&gp=0.jpg",
							name: 'Frace',
							phoneno: "16998588895"
						}
					]
					// 请使用 api 接口自行完善数据
				},
				searchTimer: null
			}
		},
		onLoad: function() {
			//获取屏幕高度及比例
			var system = systemInfo.info();
			this.scHeight = system.windowHeight - system.iPhoneXBottomHeightPx - system.statusBarHeight - (44 + uni.upx2px(136));
		},
		components: {
			graceHeader
		},
		methods: {
			changAZ: function(e) {
				var char = e.currentTarget.dataset.char;
				uni.showToast({
					title: char,
					icon: "none"
				});
				this.showId = 'AZ-' + char;
				this.currentAZ = char;
			},
			searchChange: function(e) {
				var k = e.detail.value;
				if (this.searchTimer != null) {
					clearTimeout(this.searchTimer);
				}
				this.searchTimer = setTimeout(() => {
					this.searchBase(k);
				}, 500);
			},
			searchBase: function(kwd) {
				var searchIndex = -1;
				for (var k in this.addresses) {
					for (var i = 0; i < this.addresses[k].length; i++) {
						if (this.addresses[k][i].name.indexOf(kwd) != -1 || this.addresses[k][i].phoneno.indexOf(kwd) != -1) {
							console.log(this.addresses[k][i].name, k);
							searchIndex = k + i;
							break;
						}
					}
					if (searchIndex != -1) {
						break;
					}
				}
				if (searchIndex != -1) {
					console.log(searchIndex);
					this.showId = 'show-' + searchIndex;
				}
			},
		}
	}
</script>
<style>
	.gui-address-book-header {
		line-height: 44px;
		font-size: 16px;
		padding-left: 20px;
		font-weight: bold;
		position: relative;
	}

	.gui-address-book-add-btn {
		width: 100px;
		height: 44px;
		line-height: 44px;
		font-size: 14px;
		position: absolute;
		right: 20px;
		top: 0;
	}

	.gui-address-book-add-btn text {
		margin-left: 6px;
	}

	.gui-address-book-search {
		padding: 0 80rpx;
		margin-top: 30rpx;
	}

	.gui-address-book-scview {
		margin-top: 30rpx;
	}

	.gui-address-book-scview .a-z {
		line-height: 80rpx;
		height: 80rpx;
		overflow: hidden;
		font-size: 28rpx;
		font-weight: bold;
		margin: 0 25rpx;
	}

	.gui-address-book-scview .grace-list {
		padding: 0 25rpx;
		background-color: #FFFFFF;
		margin: 0 50rpx 0 25rpx !important;
	}

	.gui-address-book-scview .grace-list .items {
		position: relative;
	}

	.gui-address-book-scview .right-btn {
		position: absolute;
		right: 0;
		top: 20rpx;
		width: 160rpx;
		height: 80rpx;
		z-index: 2;
	}

	.gui-address-book-scview .right-btn .btn {
		width: 80rpx;
		font-size: 50rpx;
		text-align: center;
		line-height: 80rpx;
		color: #D1D1D1;
	}

	.gui-address-book-scview .right-btn .btn:last-child {
		font-size: 44rpx;
	}

	.gui-address-book-az {
		width: 32rpx;
		position: fixed;
		right: 10rpx;
		bottom: 60px;
	}

	.gui-address-book-az view {
		width: 32rpx;
		height: 32rpx;
		margin-top: 5rpx;
		line-height: 32rpx;
		font-size: 24rpx;
		text-align: center;
	}

	.gui-address-book-az .current {
		background: #555555;
		color: #FFFFFF;
		border-radius: 32rpx;
	}
</style>
