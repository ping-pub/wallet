<template>
  <div>
    <router-view></router-view>
    <div style="height: 50px;"></div>
    <van-tabbar safe-area-inset-bottom active-color="#333" inactive-color="#999"	 route>
      <van-tabbar-item to="/" icon="paid">资产</van-tabbar-item>
      <van-tabbar-item to="/staking" icon="chart-trending-o">委托</van-tabbar-item>
      <van-tabbar-item to="/goverance" icon="comment-o">治理</van-tabbar-item>
      <van-tabbar-item to="/setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
