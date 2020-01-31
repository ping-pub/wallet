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
    "wallet-list": () => import("../components/wallet-list"),
    "wallet-form": () => import("../components/wallet-form"),
    "wallet-item": () => import("../components/wallet-item"),
    "wallet-receive": () => import("../components/wallet-receive"),
    "wallet-transfer": () => import("../components/wallet-transfer"),
    "wallet-tx": () => import("../components/wallet-tx"),
    "governance-item": () => import("../components/governance-item"),
    "setting-currency": () => import("../components/setting-currency"),
    "setting-chains": () => import("../components/setting-chains"),
    "setting-chains-form": () => import("../components/setting-chains-form"),
    "setting-lanaguage": () => import("../components/setting-lanaguage")
  }
};
</script>