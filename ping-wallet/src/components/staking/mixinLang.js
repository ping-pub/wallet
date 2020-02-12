/*
 * @Author: dingyiming
 * @Date: 2020-02-08 15:12:49
 * @LastEditTime : 2020-02-12 21:26:01
 * @Description: 组件设置语言环境信息
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-receive/mixinLang.js
 */
export default {
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          Commissioned: "Staking",
          reward: "Rewards",
          delegated: "Delegated",
          available: 'Available',
          unbonding: 'Unbonding',
          Client: "Delegations",
          Verifier: "Validators",
          Recommend: "Recommend",
          Whole: "Whole",
          Calculator: "Calculator",
          IncomeCalculation: "Income calculation",
          AuthorizedQuantity: "Authorized quantity",
          PleaseInput: "Please input",
          btnClaim: 'Claim',
          btnCalculator: 'Calculator',
          btnValidators: 'Validators'
        }
      },
      cn: {
        message: {
          Commissioned: "已委托",
          reward: "总收益",
          delegated: "已委托",
          available: '可用',
          unbonding: '赎回中',
          Client: "委托人",
          Verifier: "验证人",
          Recommend: "推荐",
          Whole: "全部",
          Calculator: "计算器",
          IncomeCalculation: "收益计算",
          AuthorizedQuantity: "委托数量",
          PleaseInput: "请输入",
          btnClaim: '提取收益',
          btnCalculator: '收益计算',
          btnValidators: '验证节点'
        }
      }
    }
  }
}