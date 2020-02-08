<template>
  <div>
    <van-cell-group :title="$t('message.wallet')">
      <van-cell icon="paid" :title="$t('message.walletManage')" is-link to="/wallet-list" />
      <van-cell icon="cluster-o" :title="$t('message.chainServer')" is-link to="/setting-chains" />
    </van-cell-group>
    <van-cell-group :title="$t('message.habit')">
      <van-cell
        icon="location-o"
        :title="$t('message.lanaguage')"
        is-link
        :value="currentLanaguage === 'cn' ? '简体中文' : 'English'"
        to="/setting-lanaguage"
      />
      <van-cell
        icon="exchange"
        :title="$t('message.currency')"
        is-link
        :value="currentCurrency"
        to="/setting-currency"
      />
    </van-cell-group>
    <van-cell-group :title="$t('message.recommend')">
      <van-cell
        icon="eye-o"
        :title="$t('message.browser')"
        is-link
        url="https://look.ping.pub"
        value="https://look.ping.pub"
      />
    </van-cell-group>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
  i18n: {
    messages: {
      en: {
        message: {
          wallet: "Wallet",
          walletManage: "Wallet Manage",
          chainServer: "Chain Server",
          habit: "Habit",
          lanaguage: "Lanaguage",
          currency: "Currency",
          recommend: "Recommend",
          browser: "Block Chain Browser"
        }
      },
      cn: {
        message: {
          wallet: "钱包",
          walletManage: "钱包管理",
          chainServer: "主链服务器",
          habit: "习惯",
          lanaguage: "语言切换",
          currency: "货币单位",
          recommend: "推荐",
          browser: "区块浏览器"
        }
      }
    }
  }
};
</script>