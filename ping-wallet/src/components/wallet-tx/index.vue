<template>
  <van-cell-group>
    <div v-if="list.length === 0">
      <div style="padding: 10px 0;" v-for="n in 5" :key="n">
        <van-skeleton :row="2" />
      </div>
    </div>
    <van-cell
      v-for="(item, index) of list"
      :key="index"
      :title="'# ' + item.height"
      :value="item.gas_used"
      :label="item.txhashShort"
    />
  </van-cell-group>
</template>

<script>
import mixinData from "./mixinData";

export default {
  mixins: [mixinData]
};
</script>