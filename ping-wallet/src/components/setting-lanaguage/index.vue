<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="简体中文" clickable @click="radio = '1'">
          <van-radio slot="right-icon" name="1"  checked-color="#333" />
        </van-cell>
        <van-cell title="English" clickable @click="radio = '2'">
          <van-radio slot="right-icon" name="2"  checked-color="#333"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="m-20">
      <van-button color="#333" block>保存并返回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>