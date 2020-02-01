<template>
	<web-view src="http://192.168.0.105:8080/#/" @message="handleMessage"></web-view>
</template>
<script>
	export default {
		methods: {
			handleMessage(evt) {
				console.log('接收到的消息：' + JSON.stringify(evt.detail.data));
				const app = uni.getSystemInfoSync()
				console.log(app.statusBarHeight)
				var currentWebview = this.$mp.page.$getAppWebview()
				console.log(currentWebview)
			}
		}
	}
</script>
