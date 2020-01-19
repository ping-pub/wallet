///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address, lcd) => {
	let [account, delegations] = await Promise.all([
		http.get(`/bank/accounts/${address}`, {}, {
			baseUrl: lcd
		}),
		http.get(`/stake/delegators/${address}/delegations`, {}, {
			baseUrl: lcd
		})
	])
	const coins = account.data.value.coins
	let coinNum = 0
	for (const item of coins) {
		if (item.denom === 'iris-atto') {
			coinNum = item.amount / 100000000000000000
		}
	}
	console.log(coinNum)
	return {
		available: '0',
		delegated: '0',
		total: coinNum
	}
}

export default request
