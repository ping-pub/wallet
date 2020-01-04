///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address) => {
	let [ account ] = await Promise.all([
		http.get(`/auth/accounts/${address}`)
	])
	const coins = account.data.result.value.coins
	for (const item of coins) {
		item.coin = (Number(item.amount) / 1000000).toFixed(2)
	}
	
	return coins
}

export default request
