// /distribution/delegators/{delegatorAddr}/rewards
import http from '../interface'

// 总收益
const request = async (delegatorAddr, lcd) => {
	const res = await http.get(`/staking/delegators/${delegatorAddr}/unbonding_delegations`, {}, {
		baseUrl: lcd
	})
	const result = res.data

	return result
}

export default request
