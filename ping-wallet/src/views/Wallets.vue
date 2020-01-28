<template>
  <div>
    <base-topnav title="钱包管理">
      <van-icon
        name="add-o"
        size="20"
        color="#333"
        slot="right"
        @click="() => { this.$router.push('/walletform') }"
      />
    </base-topnav>
    <wallet-list></wallet-list>
  </div>
</template>

<script>
import WalletList from "../components/wallet-list";

export default {
  components: {
    WalletList
  }
};
</script>