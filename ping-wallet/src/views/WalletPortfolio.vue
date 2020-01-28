<template>
  <div>
    <van-cell-group>
      <van-cell center style="padding: 20px;background: #333;color: #fff;">
        <div>
          <img
            src="https://wallet.ping.pub/static/wallet/cosmoshub.svg"
            style="width: 40px;height: 40px;"
            alt
          />
        </div>
        <div slot="title">
          <div style="font-size: 20px;">$1239231.123</div>
        </div>
        <div slot="label">
          <div style="color: #999;">cosmos1hk4ze3...a2ts87u</div>
        </div>
      </van-cell>
    </van-cell-group>

    <van-grid icon-size="20px">
      <van-grid-item icon="qr" text="收款" />
      <van-grid-item icon="cash-back-record" text="转账" />
      <van-grid-item icon="todo-list-o" text="交易" />
      <van-grid-item icon="setting-o" text="详情" @click="() => { this.$router.push('/walletform') }" />
    </van-grid>

    <van-cell-group title="币种">
      <van-cell right-arrow center title="ATOM" is-link label="$7" v-for="n in 2" :key="n">
        <div slot="icon">
          <img
            src="https://wallet.ping.pub/static/wallet/cosmoshub.svg"
            style="width: 40px;height: 40px;margin-right:10px;"
            alt
          />
        </div>
        <div>
          <div>$1239123123</div>
          <div>123123</div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
