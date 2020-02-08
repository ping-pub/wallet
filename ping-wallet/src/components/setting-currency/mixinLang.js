/*
 * @Author: dingyiming
 * @Date: 2020-02-08 15:12:49
 * @LastEditTime : 2020-02-08 19:11:56
 * @Description: 组件设置语言环境信息
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-receive/mixinLang.js
 */
export default {
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          RMB: "CNY(￥)",
          Dollar: "USD($)",
          Save: "Save",
        }
      },
      cn: {
        message: {
          RMB: "人民币(￥)",
          Dollar: "美元($)",
          Save: "保存并返回",
        }
      }
    }
  }
}