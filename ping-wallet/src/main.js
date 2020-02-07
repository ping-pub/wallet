import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './api'
import Vant, { Toast, Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';

import 'vant/lib/index.css';
import './components'

Vue.use(Vant);

const messages = {
  'zh-CN': {
  },
  'en-US': {
  }
};

Locale.add(messages);

// zh-CN  en-US
Locale.use('zh-CN', enUS);

Vue.config.productionTip = false
Vue.prototype.$Toast = Toast
Vue.prototype.$api = api

store.commit('initSetting')
store.commit('initWallet')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
