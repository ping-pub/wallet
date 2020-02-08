import Vue from 'vue'
import VueI18n from 'vue-i18n'
import localforage from 'localforage'

Vue.use(VueI18n)

// 准备翻译的语言环境信息
const messages = {
  en: {
  },
  cn: {
  }
}

const locale = 'cn'

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale, // 设置地区
  messages, // 设置地区信息
})

localforage.getItem('setting').then((setting) => {
  if (setting && setting.currentLanaguage) {
    i18n.locale = setting.currentLanaguage
  }
})

Vue.prototype.$lang = i18n

export default i18n
