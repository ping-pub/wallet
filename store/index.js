import Vue from 'vue'
import Vuex from 'vuex'
import currency from './currency.js'
import chain from './chain.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		currentChain: {},
		currentWallet: {}
	},
	mutations: {
		currentInit(state) {
			const currentChain = uni.getStorageSync('currentChain')
			const currentWallet = uni.getStorageSync('currentWallet')
			if (currentChain) {
				state.currentChain = currentChain
			}
			if (currentWallet) {
				state.currentWallet = currentWallet
			} else {
				const walletList = state.chain.walletList
				const keys = Object.keys(walletList)
				if (keys[0]) {
					state.currentWallet = walletList[keys[0]]
					state.currentChain = state.chain.chainList[state.currentWallet.chain]
				}
			}
		},
		walletChange(state, {
			chain,
			wallet
		}) {
			state.currentChain = chain
			state.currentWallet = wallet
			uni.setStorageSync('currentChain', chain)
			uni.setStorageSync('currentWallet', wallet)
		}
	},
	actions: {},
	modules: {
		currency,
		chain
	}
})

export default store
