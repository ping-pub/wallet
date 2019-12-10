<template>
	<view>
		<!-- 菜单区域 -->
		<view class="grace-body">
			<view style="height:50rpx;"></view>
			<view class="grace-ucenter-funs grace-box-shadow">
				<view class="grace-title">
					<text class="title grace-black">Operate</text>
					<navigator class="grace-more">全部订单<text class="grace-icons icon-arrow-right"></text></navigator>
				</view>
				<view class="grace-grids">
					<view class="items">
						<view class="icon">
							<text class="my-icon order-1"></text>
						</view>
						<view class="text">Transfer</view>
					</view>
					<view class="items">
						<view class="icon">
							<text class="my-icon order-2"></text>
						</view>
						<view class="text">Claim</view>
					</view>
					<view class="items">
						<view class="icon">
							<text class="my-icon order-3"></text>
						</view>
						<view class="text">待收货</view>
					</view>
					<view class="items">
						<view class="icon">
							<text class="my-icon order-4" style="font-size:46rpx;"></text>
						</view>
						<view class="text">评价</view>
					</view>
				</view>
			</view>
			
			<!-- 功能菜单 -->
			<view class="grace-ucenter-funs grace-box-shadow grace-list">
				<navigator class="items">
					<view class="icons grace-icons icon-friend grace-blue"></view>
					<view class="body">
						<view class="title">好友动态<text class="grace-badge grace-bg-red">12</text></view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="items">
					<view class="icons grace-icons icon-wallet grace-green"></view>
					<view class="body">
						<view class="title">我的钱包</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="items">
					<view class="icons grace-icons icon-article grace-blue-sky"></view>
					<view class="body">
						<view class="title">我的文章</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="items">
					<view class="icons grace-icons icon-user grace-red"></view>
					<view class="body">
						<view class="title">身份认证</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
			</view>
			
			<view class="grace-ucenter-funs grace-box-shadow grace-list">
				<navigator class="items">
					<view class="icons grace-icons icon-set grace-yellow"></view>
					<view class="body">
						<view class="title">账户设置</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
				<navigator class="items">
					<view class="icons grace-icons icon-phone grace-red"></view>
					<view class="body">
						<view class="title">手机密保</view>
					</view>
					<view class="arrow-right"></view>
				</navigator>
			</view>
			
			<view style="height:50rpx;"></view>
		</view>
	</view>
</template>
<script>
export default {}
</script>
<style>
page{background:#F8F8F8;}
.grace-ucenter-body{padding:0 35rpx !important; width:680rpx;}
.grace-ucenter-header{
	background:url('https://graceuitmp.oss-cn-beijing.aliyuncs.com/background/orange.png') no-repeat top center #FF6262;
	background-size:100% auto;
	width:750rpx;
}
.grace-ucenter-line1{margin-top:100rpx;}
.grace-ucenter-face{width:120rpx; height:120rpx; overflow:hidden; flex-shrink:0;}
.grace-ucenter-face-img{width:110rpx; height:110rpx; border:5rpx solid #FFFFFF;  border-radius:110rpx;}
.grace-ucenter-name{display:block; width:700rpx; margin-left:30rpx; font-size:36rpx; color:#FFFFFF; font-weight:bold;}
.grace-box-banner{background:none;}
.grace-box-banner view{color:#FFFFFF !important; border:none !important;}
.grace-ucenter-hbtn{margin:30rpx; background:linear-gradient(45deg, #FFD138,#FF00C9); color:#FFFFFF; height:88rpx; border-radius:60rpx;}
.grace-ucenter-hbtn-text{font-size:38rpx; color:#FFFFFF; margin-right:20rpx;}

.grace-ucenter-funs{margin-bottom:50rpx; background-color:#FFFFFF; padding:10rpx 25rpx; border-radius:8rpx;}
.grace-ucenter-logoff{margin-top:10rpx; }
.grace-ucenter-logoff-text{margin:0 10rpx; line-height:80rpx; color:#999999; font-size:28rpx;}

@font-face {font-family:"myFonts"; src:url('https://at.alicdn.com/t/font_1417516_7akwws1kop3.ttf') format('truetype');}
.my-icon{font-family:"myFonts" !important; font-size:58rpx; font-style:normal; color:#FF3A30;}
.order-1:before{content:"\e61b";}
.order-2:before{content:"\e617";}
.order-3:before{content:"\e604";}
.order-4:before{content:"\e625";}
</style>