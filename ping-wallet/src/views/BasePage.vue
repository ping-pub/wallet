<template>
  <div>
    <base-topnav :title="titleObj[component] || title">
    </base-topnav>

    <!-- 页面动态组件 -->
    <component :is="component"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      component: "",
      titleObj: {
        "wallet-list": "钱包管理",
        "wallet-receive": "收款",
        "wallet-transfer": "转账",
        "wallet-form": "添加钱包",
        "wallet-tx": "交易记录",
        "governance-item": "详情",
        "setting-chains": "主链服务器",
        "setting-chains-form": "添加主链服务器",
        "setting-currency": "货币单位",
        "setting-lanaguage": "语言切换"
      }
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
    "wallet-list": () => import(/* webpackChunkName: "page" */ "../components/wallet-list"),
    "wallet-form": () => import(/* webpackChunkName: "page" */ "../components/wallet-form"),
    "wallet-item": () => import(/* webpackChunkName: "page" */ "../components/wallet-item"),
    "wallet-receive": () => import(/* webpackChunkName: "page" */ "../components/wallet-receive"),
    "wallet-transfer": () => import(/* webpackChunkName: "page" */ "../components/wallet-transfer"),
    "wallet-tx": () => import(/* webpackChunkName: "page" */ "../components/wallet-tx"),
    "governance-item": () => import(/* webpackChunkName: "page" */ "../components/governance-item"),
    "setting-currency": () => import(/* webpackChunkName: "page" */ "../components/setting-currency"),
    "setting-chains": () => import(/* webpackChunkName: "page" */ "../components/setting-chains"),
    "setting-chains-form": () => import(/* webpackChunkName: "page" */ "../components/setting-chains-form"),
    "setting-lanaguage": () => import(/* webpackChunkName: "page" */ "../components/setting-lanaguage")
  }
};
</script>