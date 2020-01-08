///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address, lcd) => {
	let [txs] = await Promise.all([
		http.get(`/staking/delegators/${address}/txs`, {}, {
			baseUrl: lcd
		})
	])
	const result = txs.data.result

	return result
}

export default request
