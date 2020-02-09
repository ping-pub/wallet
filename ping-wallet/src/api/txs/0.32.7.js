///auth/accounts/{address}
import axios from '../axios'

// 钱包账户情况
const request = async (address) => {
  let [send] = await Promise.all([
    axios.get(`/txs`, {
      params: {
        'message.action': 'send',
        'message.sender': address,
        page: 1,
        limit: 100
      }
    })
  ])
  send = send.data.txs
  for (const item of send) {
    item.txhashShort = item.txhash.substr(0, 12) + '...' + item.txhash.substr(-12, 12)
    item.gas_used = (item.gas_used / 1000000).toFixed(2)
  }
  return [
    ...send
  ]
}

export default request
