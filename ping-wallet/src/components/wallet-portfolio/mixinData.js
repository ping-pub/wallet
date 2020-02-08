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
      const res = await this.$api('authAccounts')(address)
      if (!res) return
      this.coins = res.coins
      this.priceTotal = res.priceTotal
      this.loading = false
    }
  }
}
