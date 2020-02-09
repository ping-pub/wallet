export default {
  activated() {
    this.list = []
    const { address } = this.$route.query
    this.init(address);
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    async init(address) {
      const res = await this.$api('txs')(address)
      this.list = res
    }
  }
}
