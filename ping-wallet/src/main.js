import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './api'
import Vant, { Toast, Notify, Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';

import 'vant/lib/index.css';
import './components'
import i18n from './lang'

Vue.use(Vant);

// zh-CN  en-US
Locale.use('zh-CN', enUS);

Vue.config.productionTip = false
Vue.prototype.$Toast = Toast
Vue.prototype.$NotifyOk = (message) => {
  Notify({ type: 'primary', message });
}
Vue.prototype.$api = api

store.commit('initSetting')
store.commit('initWallet')

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
