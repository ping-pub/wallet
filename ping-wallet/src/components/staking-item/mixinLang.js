/*
 * @Author: dingyiming
 * @Date: 2020-02-08 15:12:49
 * @LastEditTime : 2020-02-12 21:42:08
 * @Description: 组件设置语言环境信息
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-receive/mixinLang.js
 */
export default {
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          brief: 'Brief',
          stakes: 'Stakes',
          commission: 'Commission',
          delegate: 'Delegate',
          amount: 'Amount',
          memo: 'Memo',
          fee: 'Network Fee',
          next: 'Next',
        }
      },
      cn: {
        message: {
          brief: '简介',
          stakes: '委托总数',
          commission: '佣金率',
          delegate: '提交委托',
          amount: '总数',
          memo: '备注',
          fee: '网络费用',
          next: '下一步',
        }
      }
    }
  }
}