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
      <van-button color="#333" block @click="save">{{ $t('message.save') }}</van-button>
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
      this.$lang.locale = this.radio;
      this.$i18n.locale = this.radio;
      this.$store.commit("currentLanaguageSwitch", this.radio);
      this.$NotifyOk(this.$t('message.saveOk'));
      this.$router.back();
    }
  },
  i18n: {
    messages: {
      en: {
        message: {
          save: "Save",
          saveOk: 'Success'
        }
      },
      cn: {
        message: {
          save: "保存并返回",
          saveOk: '保存成功'
        }
      }
    }
  }
};
</script>