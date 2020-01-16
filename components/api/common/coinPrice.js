// https://min-api.cryptocompare.com/documentation
// https://min-api.cryptocompare.com/data/price?fsym=ATOM&tsyms=USD,CNY&api_key=3993b9faad427d8df68c267d3e8664cd8923e6c590a4888023a14bd581ff1859
import http from '../interface'

// 币价
const request = async (chain) => {
	let [coin] = await Promise.all([
		http.get(`/data/price`, {
			fsym: chain || 'ATOM',
			tsyms: 'USD,CNY',
			api_key: '3993b9faad427d8df68c267d3e8664cd8923e6c590a4888023a14bd581ff1859'
		}, {
			baseUrl: 'https://min-api.cryptocompare.com'
		})
	])
	const { USD, CNY } = coin.data
	return {
		price: USD,
		priceCNY: CNY,
	}
}

export default request
