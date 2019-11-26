import axios from './axios'
import store from '@/store'
import notification from 'ant-design-vue/es/notification'

const nofiyError = (message) => {
  notification.error({
    message: 'Sorry',
    description: data.message
  })
}

const api = {
  nodeInfo() {
    return '/node_info'
  },
  authAccount({ address }) {
    return `/auth/accounts/${address || store.state.wallet.address }`
  },
  distributionDelegators({ address }) {
    return `/distribution/delegators/${address || store.state.wallet.address }`
  },
  stakingDelegatorsTxs({ address }) {
    return `/staking/delegators/${address || store.state.wallet.address }/txs`
  },
  stakingDelegatorsValidators({ address }) {
    return `/staking/delegators/${address || store.state.wallet.address }/validators`
  },
  stakingDelegatorsDelegations({ address }) {
    return `/staking/delegators/${address || store.state.wallet.address }/delegations`
  },
  bankBalances({ address }) {
    return `/bank/balances/${address || store.state.wallet.address }`
  }
}

// irishub 路径差异集中处理
const handlerIrisHub = (config) => {
  switch (config.url) {
    case
      '/node_info':
      config.url = '/node-info';
      break
    case
      '/staking/pool':
      config.url = '/stake/pool'
      break
    case
      '/staking/validators':
      config.url = '/stake/validators'
      break
    case
      '/staking/parameters':
      config.url = '/stake/parameters'
      config.resPrefix = 'value'
      break
    case
      '/minting/inflation':
      config.url = '/params?module=mint'
      config.resPrefix = 'value'
      break
    case
      '/slashing/parameters':
      config.url = '/params?module=slashing'
      config.resPrefix = 'value'
      break
    case
      '/distribution/parameters':
      config.url = '/params?module=distr'
      config.resPrefix = 'value'
      break
  }
}

export default {
  async github(config) {
    config.baseURL = '/github'
    const res = await axios(config)
    if (res.status !== 200) {
      nofiyError('Chain List Fetch Error!')
      return null
    }
    return res.data
  },
  async lrc(config, chain, server) {
    config.baseURL = '/api'
    config.url = api[config.url](config.params || {})
    config.headers = {}
    config.headers.server = server || window.chainLcd
    // irishub 路径处理
    if ((!chain && window.chainId === 'irishub') || (chain && chain === 'irishub')) {
      handlerIrisHub(config)
    }

    let res = await axios(config)
    if (res.status !== 200) {
      nofiyError('Error!')
      return null
    }
    res = res.data
    if (((!chain && window.chainId === 'kava') || (chain && chain === 'kava')) && res.result) {
      res = res.result
    }
    if (config.resPrefix) {
      res = res[config.resPrefix]
    }
    return res
  },
  async rpc(config, chain, server) {
    config.baseURL = '/api'
    config.headers = {}
    config.headers.server = server || window.chainRpc
    // irishub 路径处理
    if ((!chain && window.chainId === 'irishub') || (chain && chain === 'irishub')) {
      handlerIrisHub(config)
    }
    let res = await axios(config)
    if (res.status !== 200) {
      nofiyError('Error!')
      return null
    }
    res = res.data
    return res
  },
  // keybase
  async keybase(config) {
    config.baseURL = 'https://keybase.io/_/api/1.0/user/lookup.json?fields=basics,pictures'
    const res = await axios(config)
    if (res.data.status.code !== 0) {
      return null
    }
    return res.data.them[0]
  },
}
