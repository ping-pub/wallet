export default {
	methods: {
		go(path) {
			uni.navigateTo({
				url:path
			})
		},
		goSwitch(url) {
			uni.switchTab({
				url
			})
		}
	}
}