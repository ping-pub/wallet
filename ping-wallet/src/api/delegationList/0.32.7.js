///auth/accounts/{address}
import axios from '../axios'
import coinPrice from '../common/coinPrice'
import store from '../../store'

// 钱包账户情况
const request = async (address, unit) => {
  // 账户余额
  let [account, delegations] = await Promise.all([
    axios.get(`/staking/delegators/${address}/validators`), // operator_address
    axios.get(`/staking/delegators/${address}/delegations`) // validator_address
  ])
  return {
  }
}

export default request
