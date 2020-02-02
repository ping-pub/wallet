import localforage from 'localforage'

const localSave = async (state) => {
  await localforage.setItem('setting', state)
}

export default {
  state: {
    currentCurrency: '$',
    currentLanaguage: 'cn'
  },
  mutations: {
    currentCurrencySwitch(state, item) {
      state.currentCurrency = item
      localSave(state)
    },
    currentLanaguageSwitch(state, item) {
      state.currentLanaguage = item
      localSave(state)
    }
  }
}