<template>
  <van-cell-group>
    <van-cell center style="padding: 20px;background: #333;color: #fff;">
      <div>
        <van-image
          :src="'/static/chains/cosmoshub.svg'"
          width="40"
          height="40"
        />
      </div>
      <div slot="title">
        <!-- <van-skeleton :row="1" style="padding:0;" /> -->
        <div style="font-size: 20px;">$1239231.123</div>
      </div>
      <div slot="label">
        <div style="color: #999;">{{ currentWallet.address | shortAddress }}</div>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin]
};
</script>