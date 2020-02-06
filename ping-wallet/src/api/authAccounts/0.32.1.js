///auth/accounts/{address}
import axios from '../axios'

// 钱包账户情况
const request = async (address) => {
  let account = await axios.get(`/bank/accounts/${address}`)
  const coins = account.data.value.coins
  const numLong = 1000000000000000000
  for (const coin of coins) {
    coin.unit = coin.denom.toUpperCase()
    coin.amountNum = parseFloat((coin.amount / numLong).toFixed(2))
  }
  return {
    priceTotal: 0,
    coins
  }
}

export default request
