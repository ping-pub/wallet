/*
 * @Author: dingyiming
 * @Date: 2020-02-08 15:12:49
 * @LastEditTime : 2020-02-08 15:35:09
 * @Description: 组件设置语言环境信息
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-receive/mixinLang.js
 */
export default {
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          Name: "Name",
          Address: "Address",
          QAcode: "QR code",
          Copy: "Copy",
        }
      },
      cn: {
        message: {
          Name: "名称",
          Address: "地址",
          QAcode: "二维码",
          Copy: "复制",
        }
      }
    }
  }
}