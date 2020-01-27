<template>
  <div>
    <van-sticky>
    <van-nav-bar :title="$route.name" />
    </van-sticky>
    <van-cell-group title="钱包">
      <van-cell icon="location-o" title="钱包管理" is-link />
      <van-cell icon="location-o" title="主链服务器" is-link />
    </van-cell-group>
    <van-cell-group title="习惯">
      <van-cell icon="location-o" title="语言切换" is-link  value="简体中文"/>
      <van-cell icon="location-o" title="货币单位" is-link  value="$"/>
    </van-cell-group>
    <van-cell-group title="推荐">
      <van-cell icon="location-o" title="区块浏览器" is-link  value="https://look.ping.pub"/>
    </van-cell-group>
  </div>
</template>