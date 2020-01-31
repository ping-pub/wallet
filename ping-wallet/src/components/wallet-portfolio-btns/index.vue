<template>
  <van-grid icon-size="20px">
    <van-grid-item icon="qr" text="收款" @click="() => { this.$router.push(`/wallet-receive?address=${currentWallet.address}`) }"/>
    <van-grid-item icon="cash-back-record" text="转账" @click="() => { this.$router.push(`/wallet-transfer?address=${currentWallet.address}`) }"/>
    <van-grid-item icon="todo-list-o" text="交易" @click="() => { this.$router.push(`/wallet-tx?address=${currentWallet.address}`) }" />
    <van-grid-item icon="setting-o" text="详情" @click="() => { this.$router.push(`/wallet-form?address=${currentWallet.address}`) }" />
  </van-grid>
</template>


<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin]
};
</script>
