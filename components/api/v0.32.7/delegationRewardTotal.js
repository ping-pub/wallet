// /distribution/delegators/{delegatorAddr}/rewards
import http from '../interface'

// 总收益
const request = async (delegatorAddr, lcd) => {
	const res = await http.get(`/distribution/delegators/${delegatorAddr}/rewards`, {}, {
		baseUrl: lcd
	})
	const result = res.data.result
	const { rewards, total } = result
	const rewardObj = {}
	for (const item of rewards) {
		let amount = item.reward[0].amount
		amount = (Number(amount) / 1000000).toFixed(4)
		rewardObj[item.validator_address] = amount
	}
	let rewardTotal = total[0].amount
  rewardTotal = (Number(rewardTotal) / 1000000).toFixed(4)
	return {
		rewardObj,
		rewardTotal
	}
}

export default request
