export default {
	data() {
		return {
			showSwitchWallet: false
		};
	},
	methods: {
		closeSwitchWallet() {
			this.showSwitchWallet = false;
		},
		switchWallet() {
			this.showSwitchWallet = true
		},
	}
}