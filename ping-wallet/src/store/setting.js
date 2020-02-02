export default {
  state: {
    currentCurrency: '$',
    currentLanaguage: 'zh-cn'
  },
  mutations: {
    currentCurrencySwitch(state, item) {
      state.currentCurrency = item
    },
    currentLanaguageSwitch(state, item) {
      state.currentLanaguage = item
    }
  }
}