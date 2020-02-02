<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="人民币(￥)" clickable @click="radio = '￥'">
          <van-radio slot="right-icon" name="￥"  checked-color="#333" />
        </van-cell>
        <van-cell title="美元($)" clickable @click="radio = '$'">
          <van-radio slot="right-icon" name="$"  checked-color="#333"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="m-20">
      <van-button color="#333" block @click="save">保存并返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
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