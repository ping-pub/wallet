<template>
  <div>
    <van-cell-group>
      <van-cell
        v-for="(item, key) of chainList"
        :key="key"
        :title="item.name"
        :value="item.version"
        :label="item.lcd"
        is-link
        :to="`/setting-chains-form?chain=${item.name}`"
      />
    </van-cell-group>
    <div class="m-20">
      <van-button color="#333" block to="/setting-chains-form?create=1">新增主链</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from '../../store/baseMixin'

export default {
  mixins: [baseMixin]
}
</script>