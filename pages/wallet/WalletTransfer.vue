<template>
	<gracePage  headerBG="#fff">
		<PageTitle slot="gHeader" title="Transfer">
			<text style="padding: 12rpx 24rpx;" class="grace-black6 look-app-icon look-app-icon-save"></text>
		</PageTitle>

		<view slot="gBody" class="grace-body">
			<form class="grace-form">
				<!-- 项目 -->
				<view class="grace-items">
					<view class="grace-label">Cosmos</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
				<view class="grace-items">
					<view class="grace-label">Kava</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
				<view class="grace-items">
					<view class="grace-label">Iris</view>
					<input type="text" class="input" name="name" placeholder="Please Input" />
				</view>
			</form>
			<view class="tc grace-black6 look-gtbg-dark" style="padding: 12rpx 0;">
				Verify
			</view>
		</view>


	</gracePage>
</template>

<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack()
			},
			go(path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>
