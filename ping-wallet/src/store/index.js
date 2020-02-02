import Vue from 'vue'
import Vuex from 'vuex'
import wallet from './wallet'
import setting from './setting'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    wallet,
    setting
  }
})
