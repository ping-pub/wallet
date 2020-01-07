import Vue from 'vue'
import Vuex from 'vuex'
import currency from './currency.js'
import chain from './chain.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		currentChain: {
			name: 'Cosmos',
			"logo": "../../static/wallet/cosmoshub.svg",
			"version": "0.32.7",
			"lcd": "https://lcd.nylira.net",
			"unit": "ATOM",
		},
		currentWallet: {
			chain: 'Cosmos',
			name: 'DEMO',
			address: 'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
		}

	},
	mutations: {
		walletChange(state, {
			chain,
			wallet
		}) {
			state.currentChain = chain
			state.currentWallet = wallet
		}
	},
	actions: {},
	modules: {
		currency,
		chain
	}
})

export default store
