const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info'
}

const ISC0 = {
  // 节点信息
  nodeInfo: '/node_info',
}

const ISC20 = {
  // 账户余额
  bankBalance: '/bank/balances' // /${address}
}

export default {
  ...api,
  ...ISC0,
  ...ISC20
}
