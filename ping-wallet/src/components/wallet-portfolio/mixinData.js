export default {
  created() {
    this.init();
  },
  watch: {
    currentWallet(val, old) {
      if (val) {
        this.coins = [];
        this.init();
      }
    },
    currentCurrency(val, old) {
      if (val) {
        this.coins = [];
        this.init();
      }
    }
  },
  methods: {
    async init() {
      this.loading = true
      const address = this.currentWallet.address
      const unit = this.currentChain.unit
      const res = await this.$api('authAccounts')(address, unit)
      if (!res) return
      this.coins = res.coins
      this.priceTotal = res.priceTotal
      this.loading = false
    }
  }
}
