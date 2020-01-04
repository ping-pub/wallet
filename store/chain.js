const chainList = {
	Cosmos: {
		"name": "Cosmos",
		"logo": "../../static/wallet/cosmoshub.svg",
		"version": "0.32.7",
		"lcd": "https://lcd.nylira.net",
		"wallets": {
			'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050': {
				chain: 'Cosmos',
				name: 'DEMO',
				address: 'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
			}
		}
	},
	Kava: {
		"name": "Kava",
		"logo": "../../static/wallet/kava.svg",
		"version": "0.32.8",
		"lcd": "https://kava-relay.01node.com",
		"wallets": {}
	},
	Iris: {
		"name": "Iris",
		"logo": "../../static/wallet/irishub.svg",
		"version": "0.32.1",
		"lcd": "https://rpc.irisnet.org",
		"wallets": {
			'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85': {
				chain: 'Iris',
				name: '多币地址',
				address: 'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85'
			}
		}
	},
	"Sentinel Network": {
		"name": "Sentinel Network",
		"logo": "../../static/wallet/default.png",
		"version": "0.32.8",
		"lcd": "https://lcd.turing.sentinel.co",
		"wallets": []
	}
}

export default {
	state: {
		chainList
	},
	mutations: {
		chainInit(state) {
			const chainLocal = uni.getStorageSync('chainList')
			if (chainLocal) {
				state.chainList = chainLocal
			}
		}, 
		chainAdd(state, chain) {
			state.chainList[chain.name] = chain
		},
		walletAdd(state, form) {
			state.chainList[form.chain].wallets[form.address] = form
			uni.setStorageSync('chainList', state.chainList)
		}
	},
	getters: {
		chainGet(state) {
			return state.chainList
		}
	}
}
