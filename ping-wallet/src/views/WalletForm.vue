<template>
  <div>
    <base-topnav title="钱包编辑">
      <div slot="right">保存</div>
    </base-topnav>
    
    <wallet-form></wallet-form>
  </div>
</template>

<script>
import WalletForm from '../components/wallet-form'

export default {
  components: {
    WalletForm
  }
}
</script>