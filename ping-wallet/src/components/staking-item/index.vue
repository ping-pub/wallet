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
      <van-cell v-if="item.details" title="简介" :label="item.details" center></van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="委托总数" :value="item.tokens || '--'" center></van-cell>
      <van-cell title="佣金率" :value="item.rate || '--'" center></van-cell>
    </van-cell-group>

    <van-cell-group title="提交委托">
      <van-field :label="'数量'" placeholder="input"/>
      <van-field :label="'备注'" placeholder="input" />
      <van-field :label="'费用'" placeholder="input" />
    </van-cell-group>

    <div class="m-15">
      <van-button color="#333" block>下一步</van-button>
    </div>
  </div>
</template>


<script>
import mixinData from "./mixinData";

export default {
  mixins: [mixinData]
};
</script>