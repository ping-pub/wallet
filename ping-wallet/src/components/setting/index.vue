<template>
  <div>
    <van-cell-group title="钱包">
      <van-cell icon="paid" title="钱包管理" is-link to="/wallet-list"/>
      <van-cell icon="cluster-o" title="主链服务器" is-link to="/setting-chains"/>
    </van-cell-group>
    <van-cell-group title="习惯">
      <van-cell icon="location-o" title="语言切换" is-link  :value="currentLanaguage === 'cn' ? '简体中文' : 'English'" to="/setting-lanaguage"/>
      <van-cell icon="exchange" title="货币单位" is-link  :value="currentCurrency" to="/setting-currency"/>
    </van-cell-group>
    <van-cell-group title="推荐">
      <van-cell icon="eye-o" title="区块浏览器" is-link url="https://look.ping.pub"  value="https://look.ping.pub"/>
    </van-cell-group>
  </div>
</template>

<script>
import baseMixin from '../../store/baseMixin'

export default {
  mixins: [baseMixin]
}
</script>