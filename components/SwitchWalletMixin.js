export default {
	data() {
		return {
			showSwitchWallet: false
		};
	},
	methods: {
		closeSwitchWallet() {
			this.showSwitchWallet = false;
			if (this.init) {
				this.init()
			}
		},
		switchWallet() {
			this.showSwitchWallet = true
		},
	}
}