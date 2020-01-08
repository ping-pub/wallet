const walletList = {
	'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050': {
		chain: 'Cosmos',
		name: 'DEMO',
		address: 'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050',
		money: 0
	},
	'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85': {
		chain: 'Iris',
		name: '多币地址',
		address: 'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85',
		money: 0
	}
}

const chainList = {
	Cosmos: {
		"name": "Cosmos",
		"logo": "../../static/wallet/cosmoshub.svg",
		"version": "0.32.7",
		"lcd": "https://lcd.nylira.net",
		"unit": "ATOM",
		"wallets": [
			'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
		]
	},
	Kava: {
		"name": "Kava",
		"logo": "../../static/wallet/kava.svg",
		"version": "0.32.8",
		"lcd": "https://kava-relay.01node.com",
		"unit": "KAVA",
		"wallets": []
	},
	Iris: {
		"name": "Iris",
		"logo": "../../static/wallet/irishub.svg",
		"version": "0.32.1",
		"lcd": "https://rpc.irisnet.org",
		"unit": "IRIS",
		"wallets": [
			'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85'
		]
	}
}

const chainWalletStorage = (state) => {
	uni.setStorageSync('chainList', state.chainList)
	uni.setStorageSync('walletList', state.walletList)
}

export default {
	state: {
		chainList,
		walletList
	},
	mutations: {
		// 从本地获取数据
		chainInit(state) {
			const chainLocal = uni.getStorageSync('chainList')
			const walletLocal = uni.getStorageSync('walletList')
			if (chainLocal) {
				state.chainList = chainLocal
			}
			if (walletLocal) {
				state.walletList = walletLocal
			}
		},
		// 添加新链
		chainCreate(state, chain) {
			if (!state.chainList[chain.name]) {
				state.chainList[chain.name] = chain
			}
		},
		// 改变链
		chainEdit(state, chain) {
			// 链信息要加上 已存在的钱包地址
			if (state.chainList[chain.name]) {
				const wallets = state.chainList[chain.name].wallets
				chain.wallets = wallets
			}
			state.chainList[chain.name] = chain
		},
		chainDelete(state, chain) {
			delete state.chainList[chain.name]
		},
		// new
		walletCreate(state, form) {
			// 添加到 walletList 中
			state.walletList[form.address] = form
			// 添加到一个链中
			let wallets = state.chainList[form.chain].wallets
			// 判断是否已存在链上
			const isNew = wallets.find((item) => {
				return item === form.address
			})
			if (!isNew) {
				wallets.push(form.address)
				state.chainList[form.chain].wallets = wallets
			}
			chainWalletStorage(state)
		},
		walletEdit(state, form) {
			// 编辑重点是 对于改变链的判断
			// 先获取原链 和 当前链判断是否变化
			const old = state.walletList[form.address]
			// 链被改变
			if (old.chain !== form.chain) {
				// 1. 删除原在链的地址
				let oldWallets = state.chainList[old.chain].wallets
				state.chainList[old.chain].wallets = oldWallets.filter((item) => {
					return item !== form.address
				})
				console.log(state.chainList[old.chain])
				// 2. 添加到新的链上
				const newWallets = state.chainList[form.chain].wallets
				newWallets.push(form.address)
				state.chainList[form.chain].wallets = newWallets
			}
			// 改变地址对应数据
			state.walletList[form.address] = form
			chainWalletStorage(state)
		},
		walletDelete(state, form) {
			// 从链关联中剔除
			let wallets = state.chainList[form.chain].wallets
			wallets = wallets.filter((item) => {
				return item !== form.address
			})
			state.chainList[form.chain].wallets = wallets
			// 删除地址对象
			delete state.walletList[form.address]
			chainWalletStorage(state)
		}
	},
	getters: {
		chainListGet(state) {
			return state.chainList
		},
		walletListGet(state) {
			return state.walletList
		}
	}
}
