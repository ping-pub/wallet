// https://api.schail.com/v1/pc/ticker/introduce?tickerId=cosmos
import http from '../interface'

// 币价
const request = async (chain) => {
	let [coin] = await Promise.all([
		http.get(`/pc/ticker/introduce?tickerId=${chain}`, {}, {
			baseUrl: 'https://api.schail.com/v1'
		})
	])
	const { price, CNY_RATE } = coin.data.data
	return {
		price: price.toFixed(2),
		priceCNY: (price * CNY_RATE).toFixed(2)
	}
}

export default request
