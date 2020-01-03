import http from '../interface'

// 验证人列表
const validatorList = async () => {
	const res = await http.get('/staking/validators') // consensus_pubkey
	const validators = res.data.result
	for (const item of validators) {
		item.moniker = item.description.moniker
		item.rate = parseFloat(Number((Number((item.commission.commission_rates.rate)) * 100).toFixed(2))) + '%'
	}
	validators.sort((current, next) => {
		return Number(next.tokens) - Number(current.tokens)
	})
	return validators
}


export default validatorList
