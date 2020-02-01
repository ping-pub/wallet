import axios from 'axios'

export default {
  methods: {
    async init() {
      const address = this.currentWallet.address
      const res = await axios.get(`/api/auth/accounts/${address}`)
      this.coins = res.data.result.value.coins
    }
  }
}
