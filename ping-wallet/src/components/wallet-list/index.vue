<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 18:59:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-list/index.vue
 -->
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
      <van-button color="#333" style="user-select: none;" block @click="go('/wallet-form?create=1')">{{ $t('message.Add') }}</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinLang],
};
</script>