<template>
  <div>
    <van-cell-group>
      <van-cell title="Ping.pub" center label="cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu">
      </van-cell>

    </van-cell-group>
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