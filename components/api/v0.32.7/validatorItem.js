import http from '../interface'

// /staking/validators/{validatorAddr}
const request = async (validatorAddr) => {
	const res = await http.get(`/staking/validators/${validatorAddr}`)
	const item = res.data.result
	const { details, moniker, identity, website} = item.description
	item.moniker = moniker
	item.details = details
	item.identity = identity
	item.website = website
	item.short = item.operator_address.substr(0, 12) + '...' + item.operator_address.substr(-12, 12)
	item.tokens = Number(item.tokens).toFixed(2)
	return item
}

export default request