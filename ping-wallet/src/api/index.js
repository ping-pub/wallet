import store from '../store'
import authAccounts from './authAccounts'
import delegationList from './delegationList'
import stakingValidators from './stakingValidators'
import govProposals from './govProposals'
import govProposalsId from './govProposalsId'
import txs from './txs'

export default (funcName) => {
  const { version } = store.state.wallet.currentChain
  let func = null
  switch (funcName) {
    case 'authAccounts':
      func = authAccounts;
      break;
    case 'govProposals':
      func = govProposals
      break
    case 'govProposalsId':
      func = govProposalsId
      break
    case 'delegationList':
      func = delegationList
      break
    case 'stakingValidators':
      func = stakingValidators
      break
    case 'txs':
      func = txs
      break
  }
  if (func && version) {
    return func[version]
  }
  return (() => { })
}
