import Vue from 'vue'
import Vuex from 'vuex'
import currency from './currency.js'
import chain from './chain.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		current: {
			chain: 'Cosmos',
			"logo": "../../static/wallet/cosmoshub.svg",
			"version": "0.32.7",
			"lcd": "https://lcd.nylira.net",
			chain: 'Cosmos',
			name: 'DEMO',
			address: 'cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw'
		}
	},
	mutations: {},
	actions: {},
	modules: {
		currency,
		chain
	}
})

export default store
