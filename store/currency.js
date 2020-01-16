export default {
	state: {
		currency: '$'
	},
	mutations: {
		changeCurrency(state, type) {
			state.currency = type
		},
		currencyInit(state) {
			const currency = uni.getStorageSync('currency')
			state.currency = currency
		}
	}
}
