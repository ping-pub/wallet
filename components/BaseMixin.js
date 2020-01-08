export default {
	computed: {
		chains() {
			return this.$store.getters.chainListGet
		},
		wallets() {
			return this.$store.getters.walletListGet
		},
		currentChain() {
			return this.$store.state.currentChain
		},
		currentWallet() {
			return this.$store.state.currentWallet
		},
		currentCurrency() {
			return this.$store.state.currency.currency
		}
	},
	data() {
		return {
			loading: false,
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
		},
		goHome() {
			this.goSwitch('/pages/index/index')
		}
	}
}
