///auth/accounts/{address}
import axios from '../axios'

// 钱包账户情况
const request = async (address, unit) => {
  // 账户余额
  let [validators, delegations, rewards, bank] = await Promise.all([
    axios.get(`/staking/delegators/${address}/validators`), // operator_address
    axios.get(`/staking/delegators/${address}/delegations`), // validator_address
    axios.get(`/distribution/delegators/${address}/rewards`),
    axios.get(`/bank/balances/${address}`),
    axios.get(`/staking/delegators/${address}/unbonding_delegations`)
  ])
  const numLong = 1000000
  // bank balances
  bank = bank.data.result[0]
  const availableTotal = parseFloat((Number(bank.amount) / numLong).toFixed(2)) + ' ' + unit
  // delegations
  const obj = {}
  delegations = delegations.data.result
  validators = validators.data.result
  rewards = rewards.data.result
  for (const item of delegations) {
    obj[item.validator_address] = item
  }
  const rewardTotal = '+' + parseFloat((rewards.total[0].amount / numLong).toFixed(2)) + ' ' + (rewards.total[0].denom.substr(1).toUpperCase())
  for (const item of rewards.rewards) {
    const itemReward = '+' + parseFloat((item.reward[0].amount / numLong).toFixed(2))
    obj[item.validator_address].reward = itemReward
  }
  let delegateTotal = 0
  for (let i = 0; i < validators.length; i += 1) {
    let item = validators[i]
    const one = obj[item.operator_address]
    const delegatedNum = Number(one.shares) / numLong
    validators[i] = {
      ...item,
      ...item.description,
      reward: one.reward,
      delegated: parseFloat((delegatedNum).toFixed(2))
    }
    delegateTotal += delegatedNum
  }
  delegateTotal = parseFloat(delegateTotal.toFixed(2)) + ' ' + unit
  return {
    list: validators,
    availableTotal,
    delegateTotal,
    rewardTotal
  }
}

export default request
