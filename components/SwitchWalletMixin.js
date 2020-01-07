export default {
	data() {
		return {
			showSwitchWallet: false
		};
	},
	methods: {
		closeSwitchWallet({ isChange }) {
			this.showSwitchWallet = false;
			if (isChange && this.init) {
				this.init()
			}
		},
		switchWallet() {
			this.showSwitchWallet = true
		},
	}
}