///auth/accounts/{address}
import http from '../interface'

// 钱包账户情况
const request = async (address, lcd) => {
	let txs = await http.get(`/txs`, {
			// 'message.action': 'send',
			'message.sender': address
		}, {
			baseUrl: lcd
		})
	const result = txs.data
	for (const item of result.txs) {
		const txhash = item.txhash
		item.txhashShort = txhash.substr(0, 12) + '...' + txhash.substr(-12, 12)
	}

	return result
}

export default request
