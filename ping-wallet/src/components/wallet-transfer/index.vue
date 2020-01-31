<template>
  <div>
    <van-cell title="当前地址" :label="wallet.address" :value="wallet.name"></van-cell>
    <van-cell-group title="填写信息">
      <van-field placeholder="请输入" label="ATOM数量" type="number" />
      <van-field placeholder="请输入" label="收款地址" rows="1" autosize type="textarea">
        <van-icon name="scan" size="20" slot="button"></van-icon>
      </van-field>
      <van-field placeholder="请输入" label="备注" />
      <van-field placeholder="请输入" label="网络费用" value="0.6 ATOM" disabled />
    </van-cell-group>
    <div class="m-20">
      <van-button color="#333" block>下一步</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
  data() {
    return {
      wallet: {
        name: "",
        address: ""
      }
    };
  },
  created() {
    const { address } = this.$route.query;
    this.wallet = this.walletList[address];
  },
};
</script>