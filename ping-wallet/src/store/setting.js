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
    async initSetting(state) {
      state = await localforage.getItem('setting') || state
    },
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