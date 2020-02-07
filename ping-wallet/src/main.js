import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './api'
import Vant, { Toast, Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import VueI18n from 'vue-i18n'

import 'vant/lib/index.css';
import './components'

Vue.use(Vant);
Vue.use(VueI18n)

// zh-CN  en-US
Locale.use('zh-CN', enUS);

// 准备翻译的语言环境信息
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  cn: {
    message: {
      hello: '你好'
    }
  }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'cn', // 设置地区
  messages, // 设置地区信息
})

Vue.config.productionTip = false
Vue.prototype.$Toast = Toast
Vue.prototype.$api = api

store.commit('initSetting')
store.commit('initWallet')

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
