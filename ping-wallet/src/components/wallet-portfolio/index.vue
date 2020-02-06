<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="overflow:visible;">
      <wallet-portfolio-card :total="priceTotal" :loading="loading"/>
      <wallet-portfolio-btns />
      <wallet-portfolio-coins :coins="coins"/>
    </van-pull-refresh>
  </div>
</template>

<script>
import baseMixin from '../../store/baseMixin'
import mixinData from './mixinData'

export default {
  mixins: [baseMixin, mixinData],
  watch: {
    currentWallet(val, old) {
      if (val) {
        this.coins = []
        this.init()
      }
    }
  },
  components: {
    "wallet-portfolio-btns": () =>
      import(/* webpackChunkName: "home" */ "../wallet-portfolio-btns"),
    "wallet-portfolio-card": () =>
      import(/* webpackChunkName: "home" */ "../wallet-portfolio-card"),
    "wallet-portfolio-coins": () =>
      import(/* webpackChunkName: "home" */ "../wallet-portfolio-coins")
  },
  data() {
    return {
      coins: [],
      priceTotal: 0,
      loading: false,
      count: 0,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>
