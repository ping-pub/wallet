<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="overflow:visible;">
      <wallet-portfolio-card />
      <wallet-portfolio-btns />
      <wallet-portfolio-coins />
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
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
