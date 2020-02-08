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
export default {
  computed: {
    titleStr() {
      if (this.component) {
        return this.$t("message." + this.component);
      }
      return this.title;
    }
  },
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
  },
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          "wallet-list": "Wallet Manage",
          "wallet-receive": "Receive",
          "wallet-transfer": "Send",
          "wallet-form": "Wallet Form",
          "wallet-tx": "Transcations",
          "governance-item": "Detail",
          "setting-chains": "Chains Server",
          "setting-chains-form": "添加主链服务器",
          "setting-currency": "Currency",
          "setting-lanaguage": "Lanaguage"
        }
      },
      cn: {
        message: {
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
      }
    }
  }
};
</script>