export default {
  activated() {
    this.item = {}
    const { validator } = this.$route.query
    this.init(validator);
  },
  data() {
    return {
      item: {}
    }
  },
  methods: {
    async init(validator) {
      const result = await this.$api('stakingValidator')(validator)
      this.item = result
    }
  }
}
