<template>
  <div><van-cell title="名称" label="DEMO"/>
      <van-cell title="地址" label="cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050">
      </van-cell>
    <van-cell title="二维码">
      <div slot="label" style="text-align:center;padding: 10px;">
        <img :src="qrcodeImg" alt />
      </div>
    </van-cell>
     <div class="m-20">
       <van-button  color="#333" block>复制</van-button>
     </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      qrcodeImg: null,
      wallet: {
        name: "",
        address: "cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050"
      }
    };
  },
  created() {
    this.initQrcode(this.wallet.address);
  },
  methods: {
    async initQrcode(text) {
      try {
        this.qrcodeImg = await QRCode.toDataURL(text);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>