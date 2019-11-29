import localforage from 'localforage'

let chainConfig = {
  cosmoshub: {
    id: 'cosmoshub',
    lcd: 'https://lcd.nylira.net'
  },
  kava: {
    id: 'kava',
    lcd: 'https://kava-relay.01node.com'
  },
  irishub: {
    id: 'irishub',
    lcd: 'https://rpc.irisnet.org'
  }
}

// 链地址是否被支持
const isChainSupport = (address) => {
  let type = null
  if (address.indexOf('cosmos') === 0) {
    type = 'cosmoshub'
  }
  if (address.indexOf('iaa') === 0) {
    type = 'irishub'
  }
  if (address.indexOf('kava') === 0) {
    type = 'kava'
  }
  return type
}

const whichChain = async (address) => {
  const type = isChainSupport(address)
  if (type) {
    const config = await localforage.getItem('chainConfig')
    if (config) {
      chainConfig = config
    } else {
      await localforage.setItem('chainConfig', chainConfig)
    }
    window.chainId = chainConfig[type].id
    window.chainLcd = chainConfig[type].lcd
    console.log(window.chainId, window.chainLcd)
    return chainConfig[type]
  }
}

export {
  isChainSupport,
  whichChain
}