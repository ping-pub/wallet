<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 15:29:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-receive/index.vue
 -->
<template>
  <div>
    <van-cell :title="$t('message.Name')" :label="wallet.name" />
    <van-cell :title="$t('message.Address')" :label="wallet.address"></van-cell>
    <van-cell :title="$t('message.QAcode')">
      <div slot="label" style="text-align:center;padding: 10px;">
        <img :src="qrcodeImg" alt />
      </div>
    </van-cell>
    <div class="m-20">
      <van-button
        color="#333"
        style="user-select: none;"
        class="copyBtn"
        block
        data-clipboard-target="#walletAddress"
        @click="copyAddr"
      >{{ $t('message.Copy') }}</van-button>
    </div>
    <div style="opacity: 0;" id="walletAddress">{{ wallet.address }}</div>
  </div>
</template>

<script>
import QRCode from "qrcode";
import ClipboardJS from "clipboard";
import baseMixin from "../../store/baseMixin";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinLang],
  data() {
    return {
      qrcodeImg: null,
      wallet: {
        name: "",
        address: ""
      }
    };
  },
  activated() {
    const { address } = this.$route.query;
    this.wallet = this.walletList[address];
    if (this.wallet) {
      this.initQrcode(address);
    }
  },
  methods: {
    async initQrcode(text) {
      try {
        this.qrcodeImg = await QRCode.toDataURL(text);
      } catch (err) {
        console.error(err);
      }
    },
    copyAddr() {
      const clipboard = new ClipboardJS(".copyBtn");

      clipboard.on("success", e => {
        const address = e.text;
        this.$Toast('复制成功')
        e.clearSelection();
      });

      clipboard.on("error", function(e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
    }
  }
};
</script>