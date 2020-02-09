import axios from '../axios'

const request = async (validator) => {
  const res = await axios.get(`/staking/validators/${validator}`)
  let item = res.data.result
  const numLong = 1000000
  item.tokens = parseFloat((item.tokens / numLong).toFixed(2))
  item.delegator_shares = parseFloat((item.delegator_shares / numLong).toFixed(2))
  item.rate = parseFloat(Number((Number((item.commission.commission_rates.rate)) * 100).toFixed(2))) + '%'
  item = {
    ...item,
    ...item.description
  }
  return item
}

export default request
