import axios from 'axios'

export default {
  methods: {
    async init(address) {
      const res = await axios.get(`/api/staking/delegators/${address}/txs`)
      const result = res.data.result
      this.list = result
    }
  }
}
