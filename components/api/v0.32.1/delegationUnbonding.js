// /distribution/delegators/{delegatorAddr}/rewards
import http from '../interface'

// 总收益
const request = async (delegatorAddr, lcd) => {
	const res = await http.get(`/stake/delegators/${delegatorAddr}/unbonding-delegations`, {}, {
		baseUrl: lcd
	})
	const result = res.data.result

	return result
}

export default request
