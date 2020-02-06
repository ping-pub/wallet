export default {
  methods: {
    async init() {
      this.loading = true
      const address = this.currentWallet.address
      const api = this.$api().authAccounts
      const res = await api(address)
      this.coins = res.coins
      this.priceTotal = res.priceTotal
      this.loading = false
    }
  }
}
