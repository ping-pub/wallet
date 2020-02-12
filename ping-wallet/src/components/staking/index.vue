<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-12 21:27:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/staking/index.vue
 -->
<template>
  <div>
    <van-cell-group :title="currentChain.unit">
      <van-cell
        :title="$t('message.available')"
        style="padding: 5px 15px;"
        :value="delegationData.availableTotal || '--'"
        center
      ></van-cell>
      <van-cell
        :title="$t('message.delegated')"
        style="padding: 5px 15px;"
        :value="delegationData.delegateTotal || '--'"
        center
      ></van-cell>
      <van-cell :title="$t('message.unbonding')" style="padding:  5px 15px;" value="--" center></van-cell>
      <van-cell
        :title="$t('message.reward')"
        style="padding:  5px 15px;"
        :value="delegationData.rewardTotal"
        center
      ></van-cell>
    </van-cell-group>

    <van-cell-group :title="$t('message.Client')">
      <div v-if="delegationData && delegationData.list && delegationData.list.length === 0">
        <div style="padding: 10px 0;" class="van-hairline--bottom">
          <van-skeleton :row="2" />
        </div>
      </div>

      <van-cell
        v-for="(item, index) of delegationData.list"
        :key="index"
        :title="item.moniker"
        :to="`/staking-item?validator=${item.operator_address}`"
        center
        is-link
      >
        <div>
          <div>{{ item.delegated }}</div>
          <div>{{ item.reward }}</div>
        </div>
      </van-cell>
    </van-cell-group>

    <div class="m-15">
      <van-row type="flex">
        <van-button color="#333" block disabled>{{ $t('message.btnClaim') }}</van-button>
        <div style="width: 30px;"></div>
        <van-button color="#333" block to="/staking-calculator" disabled>{{ $t('message.btnCalculator') }}</van-button>
        <div style="width: 30px;"></div>
        <van-button color="#333" block to="/staking-validators">{{ $t('message.btnValidators') }}</van-button>
      </van-row>
    </div>
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