///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address, lcd) => {
	let [account] = await Promise.all([
		http.get(`/auth/accounts/${address}`, {}, {
			baseUrl: lcd
		})
	])
	const coins = account.data.result.value.coins
	for (const item of coins) {
		item.coin = parseFloat(Number((Number(item.amount)).toFixed(2)))
	}

	return coins
}

export default request
