// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import api from './api'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './utils/filter'
import './components/global.less'
import notification from 'ant-design-vue/es/notification'

Vue.config.productionTip = false
Vue.prototype.$api  = api
Vue.prototype.$notification = notification

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
