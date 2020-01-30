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
    "logo": "/static/wallet/cosmoshub.svg",
    "version": "0.32.7",
    "lcd": "https://lcd.nylira.net",
    "unit": "ATOM",
    "wallets": [
      'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
    ]
  },
  Kava: {
    "name": "Kava",
    "logo": "/static/wallet/kava.svg",
    "version": "0.32.7",
    "lcd": "https://kava-relay.01node.com",
    "unit": "KAVA",
    "wallets": []
  },
  Iris: {
    "name": "Iris",
    "logo": "/static/wallet/irishub.svg",
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
    walletList,
    chainList,
  },
  mutations: {
    walletListSave() {}
  },
  actions: {
  },
}
