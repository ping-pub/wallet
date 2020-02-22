<!--
 * @Author: your name
 * @Date: 2020-02-22 23:31:41
 * @LastEditTime: 2020-02-23 00:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/common/ledger-cosmos/lunie.vue
 -->
<template>
  <div>123</div>
</template>

<script>
import Ledger from "@lunie/cosmos-ledger"

export default {
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const signMessage = {} || ``
      const ledger = await Ledger().connect()
      const signature = await ledger.sign(signMessage)
      console.log(signature)
    }
  }
}
</script>