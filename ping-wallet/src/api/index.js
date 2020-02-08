import store from '../store'
import authAccounts from './authAccounts'
import govProposals from './govProposals'
import govProposalsId from './govProposalsId'

export default (funcName) => {
  const { version } = store.state.wallet.currentChain
  console.log(version)
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
  }
  if (func && version) {
    return func[version]
  }
  return (() => { })
}
