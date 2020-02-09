import axios from '../axios'

const request = async () => {
  const res = await axios.get(`/staking/validators`)
  const result = res.data.result

  for (const item of result) {
    item.moniker = item.description.moniker
    item.rate = parseFloat(Number((Number((item.commission.commission_rates.rate)) * 100).toFixed(2))) + '%'
  }
  result.sort((current, next) => {
    return Number(next.tokens) - Number(current.tokens)
  })
  return result
}

export default request
