<!--
 * @Author: dingyiming
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 15:49:48
 * @Description: wallet-receive
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-transfer/index.vue
 -->
<template>
  <div>
    <van-cell :title="$t('message.CurrentAddress')" :label="wallet.address" :value="wallet.name"></van-cell>
    <van-cell-group :title="$t('message.FillInformation')">
      <van-field :placeholder="$t('message.PleaseInput')" :label="$t('message.ATOMQuantity')" type="number" />
      <van-field :placeholder="$t('message.PleaseInput')" :label="$t('message.ReceiptAddress')" rows="1" autosize type="textarea">
        <van-icon name="scan" size="20" slot="button"></van-icon>
      </van-field>
      <van-field :placeholder="$t('message.PleaseInput')" :label="$t('message.Remarks')" />
      <van-field :placeholder="$t('message.PleaseInput')" :label="$t('message.NetworkCost')" value="0.6 ATOM" disabled />
    </van-cell-group>
    <div class="m-20">
      <van-button color="#333" block style="user-select: none;">{{ $t('message.NextStep') }}</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinLang],
  data() {
    return {
      wallet: {
        name: "",
        address: ""
      }
    };
  },
  activated() {
    const { address } = this.$route.query;
    this.wallet = this.walletList[address];
  },
};
</script>