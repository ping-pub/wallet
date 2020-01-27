<template>
  <div>
    <van-sticky>
      <van-nav-bar :title="$route.name">
        <div slot="left" @click="() => { this.show = true }">
          <van-icon name="exchange" color="#333" size="20" style="margin-right: 5px;" />
          <span>Name</span>
        </div>
        <div slot="right">
          <van-icon name="add-o" color="#333" size="20" />
        </div>
      </van-nav-bar>
    </van-sticky>
    <van-popup
      v-model="show"
      :closeable="true"
      position="bottom"
      :style="{ height: '80%', width: '100%' }"
    >
      <van-cell-group title="cosmos" v-for="i in 3" :key="i">
        <van-cell title="Name" label="cosmos23123...ajskdjas" center v-for="n in 5" :key="n">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon
            slot="right-icon"
            name="success"
            size="20px"
            color="#333"
            style="line-height: inherit;"
          />
        </van-cell>
      </van-cell-group>
    </van-popup>

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
      <van-grid-item icon="scan" text="扫码" />
      <van-grid-item icon="setting-o" text="详情" />
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

    <div style="height: 10px;"></div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";

export default {
  name: "home",
  data() {
    return {
      show: false
    };
  },
  components: {
    TopNav
  }
};
</script>
