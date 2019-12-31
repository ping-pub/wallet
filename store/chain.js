const chainList = {
	Cosmos: {
		"name": "Cosmos",
		"logo": "../../static/wallet/cosmoshub.svg",
		"version": "0.32.8",
		"lcd": "https://lcd.nylira.net",
		"wallets": [
			{
				chain: 'Cosmos',
				name: 'DEMO',
				address: 'cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw'
			}
		]
	},
	Kava: {
		"name": "Kava",
		"logo": "../../static/wallet/kava.svg",
		"version": "0.32.8",
		"lcd": "https://kava-relay.01node.com",
		"wallets": []
	},
	Iris: {
		"name": "Iris",
		"logo": "../../static/wallet/irishub.svg",
		"version": "0.32.8",
		"lcd": "https://rpc.irisnet.org",
		"wallets": [
			{
				chain: 'Iris',
				name: '多币地址',
				address: 'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85'
			}
		]
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
			const chainList = uni.getStorageSync('chainList')
			if (chainList) {
				state.chainList = chainList
			}
		}, 
		chainAdd(state, chain) {
			state.chainList[chain.name] = chain
		},
		walletAdd(state, form) {
			form.addTime = new Date().getTime()
			state.chainList[form.chain].wallets.push(form)
			uni.setStorageSync('chainList', state.chainList)
		}
	},
	getters: {
		chainGet(state) {
			return state.chainList
		}
	}
}
