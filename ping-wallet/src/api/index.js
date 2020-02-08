import store from '../store'
import authAccounts from './authAccounts'
import govProposals from './govProposals'

export default () => {
  const { version } = store.state.wallet.currentChain
  console.log(version)
  return {
    authAccounts: authAccounts[version],
    govProposals: govProposals[version]
  }
}
