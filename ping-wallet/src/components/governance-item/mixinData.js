export default {
  activated() {
    this.item = {}
    const { id } = this.$route.query
    this.init(id);
  },
  methods: {
    async init(id) {
      const result = await this.$api('govProposalsId')(id)
      this.item = result
    }
  }
}
