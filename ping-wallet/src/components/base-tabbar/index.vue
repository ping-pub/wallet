<template>
  <div>
    <!-- tabbar的定制页面导航 -->
    <van-sticky>
      <van-nav-bar :title="titles[$route.name]">
        <!-- 左侧 除了 setting 都有 -->
        <div v-if="$route.name !== 'Setting'" slot="left" @click="showSwitch">
          <van-icon name="exchange" color="#333" size="20" style="margin-right: 5px;" />
          <span>Name</span>
        </div>

        <!-- 右侧 每个都不一样-->
        <div
          v-if="$route.name === 'WalletPortfolio'"
          slot="right"
          @click="() => { this.$router.push('/wallet-list') }"
        >
          <van-icon name="add-o" color="#333" size="20" />
        </div>
      </van-nav-bar>
    </van-sticky>

    <!-- 钱包切换 -->
    <wallet-switch ref="wallet-switch"></wallet-switch>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- tabbar -->
    <div style="height: 50px;"></div>
    <van-tabbar safe-area-inset-bottom active-color="#333" inactive-color="#999" route>
      <van-tabbar-item to="/" icon="paid">资产</van-tabbar-item>
      <van-tabbar-item to="/staking" icon="chart-trending-o">委托</van-tabbar-item>
      <van-tabbar-item to="/governance-list" icon="comment-o">治理</van-tabbar-item>
      <van-tabbar-item to="/setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      titles: {
        WalletPortfolio: "资产",
        Staking: "委托",
        Governances: "治理",
        Setting: "设置"
      }
    };
  },
  methods: {
    showSwitch() {
      this.$refs["wallet-switch"].switch();
    }
  }
};
</script>
