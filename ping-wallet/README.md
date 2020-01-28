# ping-wallet

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# api

## 问题点

- 多版本兼容
- 主域切换
- 组件所需数据需要组装请求
  - 首先罗列基础请求
  - 再组装基础请求做业务请求

# 组件规则

## 命名规则

- 页面组件  用于组装业务组件暴露给路由 MyComponent
- 业务组件 使用文件夹  可用于独立打包 使用 xx-xx ，会包含组件、数据请求组装等部分 主入口 为 index.vue

## views/  页面组件 路由就由组件名全小写

- WalletPortfolio  资产
  - 钱包管理  Wallets
  - 钱包添加编辑 WalletForm
  - 收款   WalletReceive
  - 转账   WalletTransfer
  - 交易记录  WalletTx
  - 详情  /walletform?address=xxx  
  - 币详情  Wallet

- Staking 委托
  - 验证人详情 StakingValidator 
  - 委托表单  StakingForm
  - 提取收益  StakingClaim
  - 收益复投

- Governances 治理
  - Governance 治理详情
  - GovernanceForm 投票表单

- Setting  设置
  - 钱包管理  - 同上
  - 主链服务器  SettingChains 
  - 主链表单  SettingChainForm
  - 语言切换  SettingLanaguage
  - 货币单位  SettingCurrency

components/ 业务组件分为基础组件base-xxx和普通组件，
基础组件base-xxx
  底部导航布局 base-tabbar
  顶部导航  base-topnav

普通组件
  钱包切换  wallet-switch 
  钱包表单  wallet-form
  钱包列表  wallet-list
  