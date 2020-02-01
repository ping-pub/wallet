<template>
  <div>
    <van-tabs color="#333">
      <van-tab title="已委托">
        <van-cell-group title="总收益">
          <van-cell title="委托总数" center>
            <div>
              <div>+238293</div>
              <div>+$231231.23</div>
            </div>
          </van-cell>
          <van-cell title="收益总数" center>
            <div>
              <div>+238293</div>
              <div>+$231231.23</div>
            </div>
          </van-cell>
        </van-cell-group>
        <van-cell-group title="委托人">
          <van-cell title="Genesis Lab" label="Rate 7%" center is-link>
            <div>
              <div>200</div>
              <div>+23.xx</div>
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="验证人">
        <van-cell-group title="推荐">
          <van-cell title="Ping.pub" value="2%" center is-link></van-cell>
        </van-cell-group>
        <van-cell-group title="全部">
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
      <van-tab title="计算器">
        <van-cell-group title="验证人">
          <van-cell title="Genesis Lab" value="Rate 7%" center is-link></van-cell>
        </van-cell-group>

        <van-cell-group title="收益计算">
          <van-field label="委托数量" placeholder="请输入" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import mixinData from "./mixinData";

export default {
  mixins: [mixinData],
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