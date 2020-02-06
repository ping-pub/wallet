///auth/accounts/{address}
import axios from '../axios'
import coinPrice from '../common/coinPrice'
import store from '../../store'

// 钱包账户情况
const request = async (address) => {
  let account = await axios.get(`/auth/accounts/${address}`)
  const coins = account.data.result.value.coins
  const numLong = 1000000
  let priceTotal = 0
  const currentCurrency = store.state.setting.currentCurrency
  for (const coin of coins) {
    coin.unit = coin.denom.substr(1).toUpperCase()
    const amount = coin.amount / numLong
    coin.amountNum = amount.toFixed(2)
    const price = await coinPrice(coin.unit)
    coin.priceUSD = price.USD
    coin.priceCNY = price.CNY
    coin.amountPriceUSD = parseFloat((amount * price.USD).toFixed(2))
    coin.amountPriceCNY = parseFloat((amount * price.CNY).toFixed(2))
    const isUSD =  (currentCurrency === '$')
    coin.price = currentCurrency + (isUSD ? coin.priceUSD : coin.priceCNY)
    coin.amountPrice =  currentCurrency + (isUSD ? coin.amountPriceUSD : coin.amountPriceCNY)
    priceTotal += (isUSD ? coin.amountPriceUSD : coin.amountPriceCNY)
  }
  priceTotal = currentCurrency + priceTotal
  // 计算总价
  return {
    coins,
    priceTotal
  }
}

export default request
