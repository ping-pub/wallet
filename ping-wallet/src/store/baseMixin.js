export default {
  computed: {
    chainList() {
      return this.$store.state.wallet.chainList
    },
    walletList() {
      return this.$store.state.wallet.walletList
    },
  }
}