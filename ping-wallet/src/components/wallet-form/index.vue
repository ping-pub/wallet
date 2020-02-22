<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime: 2020-02-23 01:07:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-form/index.vue
 -->
<template>
  <div>
    <van-cell-group class="mb-10">
      <van-field
        :label="$t('message.Name')"
        :placeholder="$t('message.PleaseInput')"
        v-model="form.name"
      />
      <van-field
        :label="$t('message.Address')"
        :disabled="!create"
        :placeholder="$t('message.PleaseInput')"
        rows="1"
        autosize
        type="textarea"
        v-model="form.address"
      >
        <van-icon @click="scanDevice" name="scan" size="20" slot="button" v-if="create"></van-icon>
      </van-field>
    </van-cell-group>
    <van-cell :title="$t('message.MainChain')">
      <van-grid slot="label" :border="false">
        <van-grid-item
          @click="() => { form.chain = item.name }"
          v-for="item of chainList"
          :key="item.name"
          :text="item.name"
          :info="form.chain === item.name ? $t('message.Current') : null"
          style="background: #333;"
        >
          <div slot="icon">
            <van-image width="40" height="40" :src="item.logo" />
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell>
    <div class="m-20">
      <van-button
        color="#333"
        style="user-select: none;"
        block
        @click="save"
      >{{ $t('message.Save') }}</van-button>
      <van-button
        v-if="!create"
        plain
        block
        type="danger"
        style="user-select: none;margin-top: 10px;"
        @click="del"
      >{{ $t('message.Delete') }}</van-button>
    </div>

    <van-overlay :show="show">
      <div class="wallet-form-wrapper">
        <div class="wallet-form-block">
          <div class="DeviceSelectionScreen">
            <p>Power up your Ledger Nano X and enter your pin before continuing...</p>
            <van-button
              color="#333"
              style="margin-bottom: 10px;"
              @click="scanBle"
              block
            >Connect with USB</van-button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";
import mixinLang from "./mixinLang";
import ledgerJs from '../common/ledger-js'

export default {
  mixins: [baseMixin, mixinLang],
  activated() {
    const { address, create } = this.$route.query;
    this.create = create;
    if (address && this.walletList[address]) {
      this.form = JSON.parse(JSON.stringify(this.walletList[address]));
    } else {
      this.form = {
        name: "",
        address: "",
        chain: "Cosmos"
      };
    }
  },
  data() {
    return {
      show: false,
      create: null,
      form: {
        name: "",
        address: "",
        chain: "Cosmos"
      },
      transport: null,
      address: null
    };
  },
  methods: {
    save() {
      this.$store.commit("walletListSave", this.form);
      this.$Toast("保存成功");
      this.$router.back();
    },
    del() {
      this.$store.commit("walletListDel", this.form);
      this.$Toast("删除成功");
      this.$router.back();
    },
    scanDevice() {
      this.show = true;
    },
    scanBle() {
      this.onSelectDevice();
    },
    async onSelectDevice() {
      console.log(111)
      const address = await ledgerJs.getAddress()
      console.log(address)
      this.form.address = address.bech32_address
      this.show = false
    },
  }
};
</script>

<style scoped>
.wallet-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.wallet-form-block {
  width: 60%;
  height: 60%;
  background-color: #fff;
  padding: 20px;
}
</style>