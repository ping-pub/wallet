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
    <van-tabs color="#333" sticky>
      <van-tab :title="$t('message.Commissioned')">
        <van-cell-group :title="$t('message.TotalRevenue')">
          <van-cell :title="$t('message.TotalDelegation')" center>
            <div>
              <div>+238293</div>
              <div>+$231231.23</div>
            </div>
          </van-cell>
          <van-cell :title="$t('message.TotalIncome')" center>
            <div>
              <div>+238293</div>
              <div>+$231231.23</div>
            </div>
          </van-cell>
        </van-cell-group>
        <van-cell-group :title="$t('message.Client')">
          <van-cell title="Genesis Lab" label="Rate 7%" center is-link>
            <div>
              <div>200</div>
              <div>+23.xx</div>
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab :title="$t('message.Verifier')">
        <van-cell-group :title="$t('message.Recommend')">
          <van-cell title="Ping.pub" value="2%" center is-link></van-cell>
        </van-cell-group>
        <van-cell-group :title="$t('message.Whole')">
          <div v-if="list.length === 0">
            <div style="padding: 10px 0;" class="van-hairline--bottom" v-for="n in 10" :key="n">
              <van-skeleton :row="1" avatar />
            </div>
          </div>
          <van-cell
            class="staking-cell"
            v-for="(item, index) of list"
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
      </van-tab>
      <van-tab :title="$t('message.Calculator')">
        <van-cell-group :title="$t('message.Verifier')">
          <van-cell title="Genesis Lab" value="Rate 7%" center is-link></van-cell>
        </van-cell-group>
        <van-cell-group :title="$t('message.IncomeCalculation')">
          <van-field :label="$t('message.AuthorizedQuantity')" :placeholder="$t('message.PleaseInput')" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import mixinData from "./mixinData";
import mixinLang from "./mixinLang";

export default {
  mixins: [mixinData, mixinLang],
  created() {
    this.init();
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<style>
.staking-cell .van-cell__value {
  flex: none;
}
</style>