<template>
	<gracePage  headerBG="#fff">
		<PageTitle slot="gHeader" title="Recevie">
			<text style="padding: 12rpx 24rpx;" class="grace-black6 grace-icons icon-share"></text>
		</PageTitle>

		<view slot="gBody" class="grace-body">
			<view class="grace-bg-white grace-border mb-12  grace-border-radius-small grace-box-shadow" style="padding: 48rpx;margin-top: 24rpx;">
				<view class="mb-12 tc"><text style="font-size: 18px;">NAME</text></view>
				<view><text class="f-16 grace-text tc" style="width: 100%;display: block;overflow-wrap: break-word;">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</text></view>
				<view style="background: #fff;margin:0 auto;margin-top: 24rpx;width: 360rpx;height: 360rpx;">
					<image style="width: 100%;height: 100%;" src="https://mubu.com/qrcode/service?data=https://mubu.com/doc/6a87FSKhV1k&size=200" mode=""></image>
				</view>
				<view style="margin-top: 24rpx;" class="tc grace-black9">扫一扫上面的二维码，转账给我</view>
			</view>

			<view class="grace-border tc grace-black6 grace-box-shadowm" style="padding: 12rpx 0;margin-bottom: 20rpx;">Copy</view>
		</view>
	</gracePage>
</template>

<script>
export default {
	methods: {
		goBack() {
			uni.navigateBack();
		},
		go(path) {
			uni.navigateTo({
				url: path
			});
		}
	}
};
</script>
