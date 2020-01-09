///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address, lcd) => {
	let account = await http.get(`/auth/accounts/${address}`, {}, {
		baseUrl: lcd
	})
	const coins = account.data.result.value.coins
	const numLong = coins[0].denom === 'axon-min' ?  100000000000000000 : 1000000
	const coinNum = coins[0].amount / numLong
	return coinNum
}

export default request
