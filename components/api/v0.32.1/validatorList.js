import http from '../interface'

// 验证人列表
const validatorList = async () => {
	const res = await http.get('/stake/validators') // consensus_pubkey
	const validators = res.data
	for (const item of validators) {
		item.moniker = item.description.moniker
		item.rate = parseFloat(Number((Number((item.commission.rate)) * 100).toFixed(2))) + '%'
		item.tokens = Number(item.tokens).toFixed(2)
	}
	validators.sort((current, next) => {
		return Number(next.tokens) - Number(current.tokens)
	})
	return validators
}


export default validatorList
