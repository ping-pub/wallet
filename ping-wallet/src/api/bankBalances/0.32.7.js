///auth/accounts/{address}
import axios from '../axios'
import coinPrice from '../common/coinPrice'
import store from '../../store'

// 钱包账户情况
const request = async (address) => {
  const res = axios.get(`/bank/balances/${address}`)
  return res
}

export default request
