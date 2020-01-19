// /distribution/delegators/{delegatorAddr}/rewards
import http from '../interface'

// 总收益
const request = async (delegatorAddr, lcd) => {
	const res = await http.get(`/distribution/${delegatorAddr}/rewards`, {}, {
		baseUrl: lcd
	})
	const result = res.data
	const delegations = result.delegations || []
	const total = result.total || []
	const rewardObj = {}
	for (const item of delegations) {
		let amount = item.reward[0].amount
		amount = (Number(amount) / 1000000).toFixed(4)
		rewardObj[item.validator] = amount
	}
	let rewardTotal = null
	if (total.length > 0) {
		rewardTotal = total[0].amount
		rewardTotal = (Number(rewardTotal) / 1000000).toFixed(4)
	}
	return {
		rewardObj,
		rewardTotal
	}
}

export default request
