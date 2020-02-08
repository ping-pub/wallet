/*
 * @Author: dingyiming
 * @Date: 2020-02-08 15:12:49
 * @LastEditTime : 2020-02-08 15:46:24
 * @LastEditors  : Please set LastEditors
 * @Description: 组件设置语言环境信息
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-receive/mixinLang.js
 */
export default {
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          CurrentAddress: "Current address",
          FillInformation: "Fill in information",
          PleaseInput: "Please input",
          ATOMQuantity: "ATOM quantity",
          ReceiptAddress: "Receipt address",
          Remarks: "Remarks",
          NetworkCost: "Network cost",
          NextStep: "Next step",
        }
      },
      cn: {
        message: {
          CurrentAddress: "当前地址",
          FillInformation: "填写信息",
          PleaseInput: "请输入",
          ATOMQuantity: "ATOM数量",
          ReceiptAddress: "收款地址",
          Remarks: "备注",
          NetworkCost: "网络费用",
          NextStep: "下一步",
        }
      }
    }
  }
}