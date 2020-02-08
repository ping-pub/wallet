export default {
  created() {
    this.init();
  },
  watch: {
    currentWallet(val, old) {
      if (val) {
        this.list = [];
        this.init();
      }
    },
  },
  methods: {
    async init() {
      if (!this.$api().govProposals) return
      const result = await this.$api().govProposals()
      this.list = result
    }
  }
}
