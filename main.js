import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import i18nConfig from './lang/index.js'
import gracePage from "./graceUI/components/gracePage.vue";
import SwitchWallet from './components/SwitchWallet.vue'
import PageTitle from './components/PageTitle.vue'
import PageToast from './components/PageToast.vue'
import PageEmpty from './components/PageEmpty.vue'
import store from './store'
import api from '@/components/vmeitime-http/index.js'

// 全局挂载后使用
Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.use(VueI18n)

Vue.component('gracePage', gracePage)
Vue.component('SwitchWallet', SwitchWallet)
Vue.component('PageTitle', PageTitle)
Vue.component('PageToast', PageToast)
Vue.component('PageEmpty', PageEmpty)

Vue.config.productuinTip = false

let locale = uni.getStorageSync('language')
console.log(locale)
if (!locale) {
	const systemInfo = uni.getSystemInfoSync()
	console.log(systemInfo)
	locale = systemInfo.language
}
// 从本地存储初始化链信息
store.commit('chainInit')

const i18n = new VueI18n({
	locale,
	messages: i18nConfig
})

Vue.prototype._i18n = i18n

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
