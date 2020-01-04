import http from '../interface'

// 钱包的已委托验证人列表
const request = async (delegatorAddr) => {
	let [ validators, delegations ] = await Promise.all([
		http.get(`/staking/delegators/${delegatorAddr}/validators`), // operator_address
		http.get(`/staking/delegators/${delegatorAddr}/delegations`) // validator_address
	])
	validators = validators.data.result
	delegations = delegations.data.result
	const obj = {}
	for (const item of delegations) {
		obj[item.validator_address] = item
	}
	
	let shareTotal = 0
	for (const item of validators) {
		item.moniker = item.description.moniker
		item.rate = parseFloat(Number((Number((item.commission.commission_rates.rate)) * 100).toFixed(2))) + '%'
		if (obj[item.operator_address]) {
			const shares = obj[item.operator_address].shares
			item.shares = parseFloat(Number(shares) / 1000000)
			shareTotal += Number(item.shares)
		}
		const validatorAddr = item.operator_address
	}
	return {
		total: shareTotal,
		list: validators
	}
}

export default request
