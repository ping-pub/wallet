<template>
  <van-popup
    v-model="show"
    :closeable="true"
    position="bottom"
    :style="{ height: '80%', width: '100%' }"
  >
    <van-cell-group :title="item.name" v-for="(item, key) in chainListWallets" :key="key">
      <van-cell
        @click="switchWallet(walletList[address])"
        :title="walletList[address].name"
        :label="address"
        center
        v-for="(address, index) in item.wallets"
        :key="index"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon
          v-if="currentWallet.address === address"
          slot="right-icon"
          name="success"
          size="20px"
          color="#333"
          style="line-height: inherit;"
        />
      </van-cell>
    </van-cell-group>
  </van-popup>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
  data() {
    return {
      show: false
    };
  },
  methods: {
    switch() {
      this.show = !this.show;
    },
    switchWallet(item) {
      this.$store.commit('currentWalletSwitch', item)
      this.switch()
    }
  }
};
</script>