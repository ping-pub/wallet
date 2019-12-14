import Vue from 'vue'
import App from './App'
import './components/index.js'
import VueI18n from 'vue-i18n'
import i18nConfig from './i18n.js'

Vue.use(VueI18n)
Vue.config.productuinTip = false

const i18n = new VueI18n({
	locale: 'en',
	messages: i18nConfig
})

Vue.prototype._i18n = i18n

App.mpType = 'app'

const app = new Vue({
	i18n,
	...App
})
app.$mount()
