<template>
  <div>
    <van-cell title="名称" :label="wallet.name" />
    <van-cell title="地址" :label="wallet.address"></van-cell>
    <van-cell title="二维码">
      <div slot="label" style="text-align:center;padding: 10px;">
        <img :src="qrcodeImg" alt />
      </div>
    </van-cell>
    <div class="m-20">
      <van-button
        color="#333"
        class="copyBtn"
        block
        data-clipboard-target="#walletAddress"
        @click="copyAddr"
      >复制</van-button>
    </div>
    <div style="opacity: 0;" id="walletAddress">{{ wallet.address }}</div>
  </div>
</template>

<script>
import QRCode from "qrcode";
import ClipboardJS from "clipboard";
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
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