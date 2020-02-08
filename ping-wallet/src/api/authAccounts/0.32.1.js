///auth/accounts/{address}
import axios from '../axios'
import coinPrice from '../common/coinPrice'
import store from '../../store'

// 钱包账户情况
const request = async (address) => {
  const res = await axios.get(`/bank/accounts/${address}`)
  const coins = res.data.value.coins
  const numLong = 1000000000000000000
  let priceTotal = 0
  const currentCurrency = store.state.setting.currentCurrency
  for (const coin of coins) {
    const amount = coin.amount / numLong
    coin.amountNum = amount.toFixed(2)
    coin.unit = coin.denom.toUpperCase()
    if (coin.unit === 'IRIS-ATTO') {
      coin.unit = 'IRIS'
      const price = await coinPrice(coin.unit)
      coin.priceUSD = price.USD
      coin.priceCNY = price.CNY
      coin.amountPriceUSD = parseFloat((amount * price.USD).toFixed(2))
      coin.amountPriceCNY = parseFloat((amount * price.CNY).toFixed(2))
      const isUSD = (currentCurrency === '$')
      coin.price = currentCurrency + (isUSD ? coin.priceUSD : coin.priceCNY)
      coin.amountPrice = currentCurrency + (isUSD ? coin.amountPriceUSD : coin.amountPriceCNY)
      priceTotal += (isUSD ? coin.amountPriceUSD : coin.amountPriceCNY)
    }
  }
  coins.reverse()
  priceTotal = currentCurrency + priceTotal
  return {
    priceTotal,
    coins
  }
}

export default request
