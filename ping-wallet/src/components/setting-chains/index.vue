<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 19:01:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/setting-chains/index.vue
 -->
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
      <van-button color="#333" style="user-select: none;" block to="/setting-chains-form?create=1">{{ $t('message.NewMainChain') }}</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from '../../store/baseMixin'
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinLang]
}
</script>