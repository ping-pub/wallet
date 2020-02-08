<template>
  <van-grid icon-size="20px">
    <van-grid-item
      icon="qr"
      :text="$t('message.receive')"
      @click="() => { this.$router.push(`/wallet-receive?address=${currentWallet.address}`) }"
    />
    <van-grid-item
      icon="cash-back-record"
      :text="$t('message.send')"
      @click="() => { this.$router.push(`/wallet-transfer?address=${currentWallet.address}`) }"
    />
    <van-grid-item
      icon="todo-list-o"
      :text="$t('message.tx')"
      @click="() => { this.$router.push(`/wallet-tx?address=${currentWallet.address}`) }"
    />
    <van-grid-item
      icon="setting-o"
      :text="$t('message.detail')"
      @click="() => { this.$router.push(`/wallet-form?address=${currentWallet.address}`) }"
    />
  </van-grid>
</template>


<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          receive: "Receive",
          send: "Send",
          tx: "Transcation",
          detail: "Detail"
        }
      },
      cn: {
        message: {
          receive: "收款",
          send: "转账",
          tx: "交易",
          detail: "详情"
        }
      }
    }
  }
};
</script>
