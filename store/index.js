import Vue from 'vue'
import Vuex from 'vuex'
import currency from './currency.js'
import chain from './chain.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		currency,
		chain
	}
})

export default store
