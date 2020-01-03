
export default {
	computed: {
		chains() {
			return this.$store.getters.chainGet
		},
		chain() {
			return this.$store.state.current
		}
	},
	data() {
		return {
			toast: false,
			msg: ''
		}
	},
	methods: {
		toastShow(msg) {
			this.toast = true
			this.msg = msg
			setTimeout(function() {
				this.toast = false
			}.bind(this), 2500);
		},
		go(path) {
			uni.navigateTo({
				url: path
			})
		},
		goSwitch(url) {
			uni.switchTab({
				url
			})
		},
		goBack() {
			uni.navigateBack({})
		}
	}
}
