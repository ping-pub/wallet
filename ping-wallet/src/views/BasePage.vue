<template>
  <div>
    <base-topnav :title="titleStr"></base-topnav>

    <!-- 页面动态组件 -->
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import mixinLang from "./mixinLang";

export default {
  mixins: [mixinLang],
  data() {
    return {
      title: "",
      component: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    const component = to.params.component;
    const title = component;
    next(vm => {
      vm.component = component;
      vm.title = title;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.component = to.params.component;
    this.title = this.component;
    next();
  },
  components: {
    "wallet-list": () =>
      import(/* webpackChunkName: "page" */ "../components/wallet-list"),
    "wallet-form": () =>
      import(/* webpackChunkName: "page" */ "../components/wallet-form"),
    "wallet-item": () =>
      import(/* webpackChunkName: "page" */ "../components/wallet-item"),
    "staking-item": () =>
      import(/* webpackChunkName: "page" */ "../components/staking-item"),
    "staking-validators": () =>
      import(/* webpackChunkName: "page" */ "../components/staking-validators"),
    "wallet-receive": () =>
      import(/* webpackChunkName: "page" */ "../components/wallet-receive"),
    "wallet-transfer": () =>
      import(/* webpackChunkName: "page" */ "../components/wallet-transfer"),
    "wallet-tx": () =>
      import(/* webpackChunkName: "page" */ "../components/wallet-tx"),
    "governance-item": () =>
      import(/* webpackChunkName: "page" */ "../components/governance-item"),
    "setting-currency": () =>
      import(/* webpackChunkName: "page" */ "../components/setting-currency"),
    "setting-chains": () =>
      import(/* webpackChunkName: "page" */ "../components/setting-chains"),
    "setting-chains-form": () =>
      import(
        /* webpackChunkName: "page" */ "../components/setting-chains-form"
      ),
    "setting-lanaguage": () =>
      import(/* webpackChunkName: "page" */ "../components/setting-lanaguage")
  }
};
</script>