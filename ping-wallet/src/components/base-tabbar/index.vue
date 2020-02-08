<template>
  <div>
    <!-- tabbar的定制页面导航 -->
    <van-sticky>
      <van-nav-bar :title="$t(`message.${$route.name}`)">
        <!-- 左侧 除了 setting 都有 -->
        <div v-if="$route.name !== 'Setting'" slot="left" @click="showSwitch">
          <van-icon name="exchange" color="#333" size="20" style="margin-right: 5px;" />
          <span>{{ currentWallet.name }}</span>
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
      <van-tabbar-item to="/" icon="paid">{{ $t('message.WalletPortfolio') }}</van-tabbar-item>
      <van-tabbar-item to="/staking" icon="chart-trending-o">{{ $t('message.Staking') }}</van-tabbar-item>
      <van-tabbar-item to="/governance-list" icon="comment-o">{{ $t('message.Governances') }}</van-tabbar-item>
      <van-tabbar-item to="/setting" icon="setting-o">{{ $t('message.Setting') }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
import baseMixin from "../../store/baseMixin";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinLang],
  methods: {
    showSwitch() {
      this.$refs["wallet-switch"].switch();
    }
  }
};
</script>
