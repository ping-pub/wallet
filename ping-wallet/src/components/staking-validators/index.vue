<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 18:53:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/staking/index.vue
 -->
<template>
  <div>
    <van-cell-group :title="$t('message.Recommend')">
      <van-cell
        title="Ping.pub"
        center
        is-link
        to="/staking-item?validator=cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu"
      ></van-cell>
    </van-cell-group>
    <van-cell-group :title="$t('message.Whole')">
      <div v-if="validatorList && validatorList.length === 0">
        <div style="padding: 10px 0;" class="van-hairline--bottom" v-for="n in 10" :key="n">
          <van-skeleton :row="1" avatar />
        </div>
      </div>
      <van-cell
        class="staking-cell"
        v-for="(item, index) of validatorList"
        :key="item.operator_address"
        :title="item.moniker"
        :value="item.rate"
        :to="`staking-item?validator=${item.operator_address}`"
        center
        is-link
      >
        <div slot="icon">
          <van-tag plain type="primary" style="margin-right: 10px;">{{ index + 1}}</van-tag>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>


<script>
import baseMixin from "../../store/baseMixin";
import mixinData from "./mixinData";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinData, mixinLang]
};
</script>

<style>
.staking-cell .van-cell__value {
  flex: none;
}
</style>