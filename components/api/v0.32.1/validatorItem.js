import http from '../interface'

// /staking/validators/{validatorAddr}
const request = async (validatorAddr) => {
	const res = await http.get(`/stake/validators/${validatorAddr}`)
	const item = res.data
	const { details, moniker, identity, website} = item.description
	item.moniker = moniker
	item.details = details
	item.identity = identity
	item.website = website
	return item
}

export default request