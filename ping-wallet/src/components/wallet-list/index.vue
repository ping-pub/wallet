<template>
  <van-cell-group>
    <div slot="title">
      <van-row type="flex" justify="space-between">
        <span>Cosmos</span>
        <img
          src="https://wallet.ping.pub/static/wallet/cosmoshub.svg"
          style="width: 20px;height: 20px;"
          alt
        />
      </van-row>
    </div>
    <van-cell
      v-for="(item, key) in walletList"
      :key="key"
      :title="item.name"
      :label="item.address"
      :to="`/wallet-form?address=${item.address}`"
      center
      is-link
    />
  </van-cell-group>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin]
};
</script>