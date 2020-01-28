<template>
  <van-grid icon-size="20px">
    <van-grid-item icon="qr" text="收款" @click="() => { this.$router.push('/wallet-receive') }"/>
    <van-grid-item icon="cash-back-record" text="转账" @click="() => { this.$router.push('/wallet-transfer') }"/>
    <van-grid-item icon="todo-list-o" text="交易" @click="() => { this.$router.push('/wallet-tx') }" />
    <van-grid-item icon="setting-o" text="详情" @click="() => { this.$router.push('/wallet-form') }" />
  </van-grid>
</template>