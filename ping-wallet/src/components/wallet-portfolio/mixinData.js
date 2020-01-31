import axios from 'axios'

export default {
  methods: {
    async init() {
      const address = this.currentWallet.address
      const res = await axios.get(`/api/auth/accounts/${address}`)
      console.log(res)
      this.coins = res.data.result.value.coins
    }
  }
}
