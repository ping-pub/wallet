<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" title="收款地址"></PageTitle>

		<view slot="gBody">
			<view class="bg-black" style="padding: 48rpx;margin: 40rpx 30rpx;margin-bottom: 0;">
				<view class="grace-border-radius-small" style="background: #fff;margin:0 auto;margin-top: 24rpx;width: 280rpx;height: 280rpx;margin-bottom: 24rpx;">
					<image style="width: 100%;height: 100%;" :src="qrcodeImg"
					 mode=""></image>
				</view>
				<view class="mb-6 tc"><text style="font-size: 18px;font-weight: bold;">{{ wallet.chain }}</text></view>
				<view class="mb-12"><text class="f-16 grace-text tc" style="width: 400rpx;display: block;overflow-wrap: break-word;margin: 0 auto;">{{ wallet.address }}</text></view>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-black lg">一键复制</button>
			</view>
		</view>
	</gracePage>
</template>

<script>
	import QRCode from 'qrcode'

	export default {
		data() {
			return {
				wallet: {
					address: '',
					chain: ''
				},
				qrcodeImg: null
			}
		},
		onLoad(options) {
			const {
				address,
				chain
			} = options
			this.wallet = {
				address,
				chain
			}
			this.genQrcode(address)
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			go(path) {
				uni.navigateTo({
					url: path
				});
			},
			async genQrcode(text) {
				try {
					this.qrcodeImg = await QRCode.toDataURL(text)
					console.log(this.qrcodeImg)
				} catch (err) {
					console.error(err)
				}
			}
		}
	};
</script>
