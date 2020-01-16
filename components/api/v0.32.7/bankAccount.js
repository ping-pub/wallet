///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address, lcd) => {
	let [balance, delegations] = await Promise.all([
		http.get(`/auth/accounts/${address}`, {}, {
			baseUrl: lcd
		}),
		http.get(`/staking/delegators/${address}/delegations`, {}, {
			baseUrl: lcd
		})
	])
	
	let available = Number(balance.data.result.value.coins[0].amount)
	delegations = delegations.data.result
	let delegated = 0
	for (const item of delegations) {
		delegated += Number(item.balance)
	}
	const total = (delegated + available) / 1000000
	return {
		available: available / 1000000,
		delegated: delegated / 1000000,
		total
	}
}

export default request
