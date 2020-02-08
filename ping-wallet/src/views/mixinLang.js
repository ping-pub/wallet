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
          "governance-item": "Detail",
          "setting-chains": "Chains Server",
          "setting-chains-form": "添加主链服务器",
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