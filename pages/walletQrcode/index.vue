<template>
	<gracePage headerBG="linear-gradient(to right, #212452, #37434b)">
		<PageTitle slot="gHeader" title="Recevie" theme="light">
			<text style="padding: 12rpx 24rpx;" class="grace-white grace-icons icon-share"></text>
		</PageTitle>

		<view slot="gBody">
			<view class="look-gtbg-dark grace-box-shadow" style="padding: 48rpx;">
				<view class="grace-border-radius-small" style="background: #fff;margin:0 auto;margin-top: 24rpx;width: 280rpx;height: 280rpx;margin-bottom: 24rpx;padding: 24rpx;">
					<image style="width: 100%;height: 100%;" src="https://mubu.com/qrcode/service?data=https://mubu.com/doc/6a87FSKhV1k&size=200"
					 mode=""></image>
				</view>
				<view class="mb-6 tc"><text style="font-size: 18px;font-weight: bold;">Cosmos</text></view>
				<view class="mb-12"><text class="f-16 grace-text tc" style="width: 400rpx;display: block;overflow-wrap: break-word;margin: 0 auto;">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</text></view>

			</view>

			<view class="grace-border tc grace-white look-gtbg-dark grace-box-shadow grace-border-radius" style="padding: 12rpx 0;margin:24rpx; ">Copy
				The Address</view>
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
