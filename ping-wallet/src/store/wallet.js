import localforage from 'localforage'

const localSave = async (state) => {
  await localforage.setItem('walletList', state.walletList)
  await localforage.setItem('chainList', state.chainList)
}

const walletList = {
  'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050': {
    chain: 'Cosmos',
    name: 'DEMO',
    address: 'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
  },
  'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85': {
    chain: 'Iris',
    name: '多币地址',
    address: 'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85'
  }
}

const chainList = {
  Cosmos: {
    "name": "Cosmos",
    "logo": "/static/chains/cosmoshub.svg",
    "version": "0.32.7",
    "lcd": "https://lcd.nylira.net",
    "unit": "ATOM",
    "wallets": [
      'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
    ]
  },
  Kava: {
    "name": "Kava",
    "logo": "/static/chains/kava.svg",
    "version": "0.32.7",
    "lcd": "https://kava-relay.01node.com",
    "unit": "KAVA",
    "wallets": []
  },
  Iris: {
    "name": "Iris",
    "logo": "/static/chains/irishub.svg",
    "version": "0.32.1",
    "lcd": "https://rpc.irisnet.org",
    "unit": "IRIS",
    "wallets": [
      'iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85'
    ]
  }
}

export default {
  state: {
    currentWallet: {},
    currentChain: {},
    walletList,
    chainList,
  },
  mutations: {
    async initWallet(state) {
      state.walletList = await localforage.getItem('walletList') || walletList
      state.chainList = await localforage.getItem('chainList') || chainList
      // 获取第一个钱包
      const walletObj = state.walletList
      const key = Object.keys(walletObj)[0]
      let currentWallet = walletObj[key]
      // 获取session 存储
      let current = window.sessionStorage.getItem('current')
      if (current) {
        current = JSON.parse(current)
        currentWallet = current.currentWallet
      }
      const chain = currentWallet.chain
      state.currentWallet = currentWallet
      state.currentChain = state.chainList[chain] || current.currentChain
    },
    walletListSave(state, item) {
      state.walletList[item.address] = item
      // chianList - wallets 维护
      const wallets = state.chainList[item.chain].wallets
      const isExit = wallets.find((one) => {
        return item.address === one
      })
      // 不存在则添加
      if (!isExit) {
        wallets.push(item.address)
      }
      state.chainList[item.chain].wallets = wallets
      // 更新本地存储 walletList chainList
      localSave(state)
    },
    walletListDel(state, item) {
      // 禁止删除当前选中的钱包
      if (item.address === state.currentWallet.address) return
      delete state.walletList[item.address]
      const wallets = state.chainList[item.chain].wallets
      state.chainList[item.chain].wallets = wallets.filter((one) => {
        return one !== item.address
      })
      localSave(state)
    },
    currentWalletSwitch(state, item) {
      state.currentWallet = item
      state.currentChain = state.chainList[item.chain]
      // 存储 session
      window.sessionStorage.setItem('current', JSON.stringify({
        currentWallet: state.currentWallet,
        currentChain: state.currentChain
      }))
    },
    currentChainSwitch(state, item) {
      state.currentChain = item
    },
  },
  actions: {
  },
}
