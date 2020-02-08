<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 19:10:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/setting-currency/index.vue
 -->
<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell :title="$t('message.RMB')" clickable @click="radio = '￥'">
          <van-radio slot="right-icon" name="￥"  checked-color="#333" />
        </van-cell>
        <van-cell :title="$t('message.Dollar')" clickable @click="radio = '$'">
          <van-radio slot="right-icon" name="$"  checked-color="#333"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="m-20">
      <van-button color="#333" style="user-select: none;" block @click="save">{{ $t('message.Save') }}</van-button>
    </div>
  </div>
</template>

<script>
import mixinLang from "./mixinLang";
export default {
  mixins: [mixinLang],
  activated() {
    this.radio = this.$store.state.setting.currentCurrency || '$'
  },
  data() {
    return {
      radio: ''
    }
  },
  methods: {
    save() {
      this.$store.commit('currentCurrencySwitch', this.radio)
      this.$Toast('保存成功')
      this.$router.back()
    }
  }
}
</script>