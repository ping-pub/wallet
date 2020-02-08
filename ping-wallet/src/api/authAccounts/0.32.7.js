///auth/accounts/{address}
import axios from '../axios'
import coinPrice from '../common/coinPrice'
import store from '../../store'

// 钱包账户情况
const request = async (address, unit) => {
  // 账户余额
  let [account, delegations] = await Promise.all([
    axios.get(`/auth/accounts/${address}`),
    axios.get(`/staking/delegators/${address}/delegations`)
  ])
  delegations = delegations.data.result
  let delegateTotal = 0
  for (const item of delegations) {
    delegateTotal += Number(item.shares)
  }
  const numLong = 1000000
  delegateTotal = delegateTotal / numLong
  const coins = account.data.result.value.coins
  let priceTotal = 0
  const currentCurrency = store.state.setting.currentCurrency
  for (const coin of coins) {
    coin.unit = coin.denom.substr(1).toUpperCase()
    let amount = coin.amount / numLong
    coin.available = parseFloat(amount.toFixed(2))
    // 主币要加上委托出去的资产
    if (coin.unit === unit) {
      amount += delegateTotal
    }
    coin.amountNum = parseFloat(amount.toFixed(2))
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
  priceTotal = currentCurrency + priceTotal
  // 计算总价
  return {
    coins,
    priceTotal
  }
}

export default request
