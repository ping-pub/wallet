# 基础数据

> 整个钱包的数据来源内容
> 核心为：
>   主链 => 决定接口请求服务
>   钱包 => 后续操作的基础依赖

- 主链数组 chainList
> 主链可以自定义添加，所以需要通过本地化配置存储和读取

```
[
	{
		name: 'Cosmos', // 不能重复，作为唯一值
		lcd: 'xxxx',
		logo: 'xxxx', // 没有则取默认值
		version: '',
		wallets: []
	}
]

```

- 钱包数组  walletList

> 每个主链下都有一个钱包数组

```
[
	{
		name: '', // 可重复
		chain: 'Cosmos',
		address: '',
		addTime: '' // 添加时间，可作为本地的唯一识别
	}
]
```

# 设置数据

- 语言类型
- 币种切换

# 接口文档

- [cosmos](https://cosmos.network/rpc)
- [IRIS](https://rpc.irisnet.org/swagger-ui/#/)

# 数据对接顺序

- 设置 - 语言切换 / 货币切换
- 主链 CURD
- 钱包 CURD
- 首页
- 钱包详情
- 钱包切换
- 委托
- 投票
- 钱包交易
- 委托详情
- 投票详情
- 其他

# 接口逻辑

- 获取钱包 货币

```
// cosmos
https://lcd.nylira.net/auth/accounts/cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw [完整]
https://lcd.nylira.net/bank/balances/cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw [简约]

// iris
https://rpc.irisnet.org/bank/accounts/iaa1v6c3sa76s3grss3xu64tvn9nd556jlcw6azc85
```

- 委托

```
// 获取验证人列表

// 获取钱包的委托信息

```


- 治理

```
// cosmos
// iris
/gov/proposals
```