<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="简体中文" clickable @click="radio = 'cn'">
          <van-radio slot="right-icon" name="cn" checked-color="#333" />
        </van-cell>
        <van-cell title="English" clickable @click="radio = 'en'">
          <van-radio slot="right-icon" name="en" checked-color="#333" />
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
    this.radio = this.$store.state.setting.currentLanaguage;
  },
  data() {
    return {
      radio: ""
    };
  },
  methods: {
    save() {
      this.$store.commit("currentLanaguageSwitch", this.radio);
      this.$i18n.locale = this.radio
      this.$Toast("保存成功");
      this.$router.back();
    }
  }
};
</script>