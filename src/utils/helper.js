const chainConfig = {
  cosmos: {
    id: 'cosmos',
    lcd: 'https://lcd.nylira.net'
  },
  kava: {
    id: 'kava',
    lcd: 'https://kava-relay.01node.com'
  },
  iris: {
    id: 'iris',
    lcd: 'https://rpc.irisnet.org'
  }
}

// 链地址是否被支持
const isChainSupport = (address) => {
  let type = null
  if (address.indexOf('cosmos') === 0) {
    type = 'cosmos'
  }
  if (address.indexOf('iaa') === 0) {
    type = 'iris'
  }
  if (address.indexOf('kava') === 0) {
    type = 'kava'
  }
  return type
}

const whichChain = (address) => {
  const type = isChainSupport(address)
  if (type) {
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