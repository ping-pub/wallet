<template>
  <div>
    <van-cell-group class="mb-10">
      <van-field label="名称" placeholder="请输入" v-model="form.name" />
      <van-field
        label="地址"
        placeholder="请输入"
        rows="1"
        autosize
        type="textarea"
        v-model="form.address"
      >
        <van-icon name="scan" size="20" slot="button"></van-icon>
      </van-field>
    </van-cell-group>
    <van-cell title="主链">
      <van-grid slot="label" :border="false">
        <van-grid-item
          @click="() => { form.chain = item.name }"
          v-for="item of chains"
          :key="item.name"
          :text="item.name"
          :info="form.chain === item.name ? '当前' : null"
          style="background: #333;"
        >
          <div slot="icon">
            <van-image width="40" height="40" :src="item.logo" />
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell>
    <div class="m-20">
      <van-button color="#333" block>保存</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
  created() {
    const { address, create } = this.$route.query;
    if (address && this.walletList[address]) {
      this.form = JSON.parse(JSON.stringify(this.walletList[address]));
    }
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        chain: "Cosmos"
      },
      chains: [
        {
          name: "Cosmos",
          logo: "/static/chains/cosmoshub.svg",
          version: ""
        },
        {
          name: "Iris",
          logo: "/static/chains/irishub.svg",
          version: ""
        },
        {
          name: "Kava",
          logo: "/static/chains/kava.svg",
          version: ""
        },
        {
          name: "Other",
          logo: "/static/chains/default.png",
          version: ""
        }
      ]
    };
  }
};
</script>