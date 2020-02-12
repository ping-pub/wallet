<!--
 * @Author: your name
 * @Date: 2020-02-10 11:46:40
 * @LastEditTime : 2020-02-12 21:42:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/staking-item/index.vue
 -->
<template>
  <div>
    <van-cell-group>
      <div v-if="!item.operator_address">
        <div style="padding: 10px 0;" class="van-hairline--bottom" v-for="n in 2" :key="n">
          <van-skeleton :row="2" />
        </div>
      </div>
      <van-cell
        center
        :label="item.operator_address"
      >
      <div slot="title" style="font-size: 16px;">
        {{ item.moniker }}
      </div>
      </van-cell>
      <van-cell v-if="item.details" :title="$t('message.brief')" :label="item.details" center></van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell :title="$t('message.stakes')" :value="item.tokens || '--'" center></van-cell>
      <van-cell :title="$t('message.commission')"  :value="item.rate || '--'" center></van-cell>
    </van-cell-group>

    <van-cell-group :title="$t('message.delegate')">
      <van-field :label="$t('message.amount')" placeholder="input"/>
      <van-field :label="$t('message.memo')" placeholder="input" />
      <van-field :label="$t('message.fee')" placeholder="input" />
    </van-cell-group>

    <div class="m-15">
      <van-button color="#333" block>{{ $t('message.next') }}</van-button>
    </div>
  </div>
</template>


<script>
import mixinData from "./mixinData";
import mixinLang from './mixinLang'

export default {
  mixins: [mixinData, mixinLang]
};
</script>