export default {
	state: {
		currency: '$'
	},
	mutations: {
		changeCurrency(state, type) {
			state.currency = type
		}
	}
}
