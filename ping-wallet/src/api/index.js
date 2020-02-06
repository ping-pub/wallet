import store from '../store'
import authAccounts from './authAccounts'

export default () => {
  const { version } = store.state.wallet.currentChain
  return {
    authAccounts: authAccounts[version]
  }
}
