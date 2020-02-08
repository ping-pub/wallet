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
      const api = this.$api().authAccounts
      if (api) {
        const res = await api(address)
        this.coins = res.coins
        this.priceTotal = res.priceTotal
      }
      this.loading = false
    }
  }
}
