/*
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime: 2020-02-08 19:39:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/views/mixinLang.js
 */
export default {
  computed: {
    titleStr() {
      if (this.component) {
        return this.$t("message." + this.component);
      }
      return this.title;
    }
  },
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          "wallet-list": "Wallet Manage",
          "wallet-receive": "Receive",
          "wallet-transfer": "Send",
          "wallet-form": "Wallet Form",
          "wallet-tx": "Transcations",
          "staking-item": "Validator",
          "governance-item": "Detail",
          "setting-chains": "Chains Server",
          "setting-chains-form": "New Chains Server",
          "setting-currency": "Currency",
          "setting-lanaguage": "Lanaguage"
        }
      },
      cn: {
        message: {
          "wallet-list": "钱包管理",
          "wallet-receive": "收款",
          "wallet-transfer": "转账",
          "wallet-form": "添加钱包",
          "wallet-tx": "交易记录",
          "staking-item": "验证人",
          "governance-item": "详情",
          "setting-chains": "主链服务器",
          "setting-chains-form": "添加主链服务器",
          "setting-currency": "货币单位",
          "setting-lanaguage": "语言切换"
        }
      }
    }
  }
}