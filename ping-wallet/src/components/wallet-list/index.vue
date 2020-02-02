<template>
  <div>
    <van-cell-group v-for="(chain, id) in chainListWallets" :key="id">
      <div slot="title">
        <van-row type="flex" justify="space-between">
          <span>{{ chain.name }}</span>
          <van-image :src="chain.logo" width="20" height="20" />
        </van-row>
      </div>
      <van-cell
        v-for="(address, index) in chain.wallets"
        :key="index"
        :title="walletList[address].name"
        :label="address"
        :to="`/wallet-form?address=${address}`"
        center
        is-link
      />
    </van-cell-group>

    <div class="m-20">
      <van-button color="#333" block @click="go('/wallet-form?create=1')">添加</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
};
</script>