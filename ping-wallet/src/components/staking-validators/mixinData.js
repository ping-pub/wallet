export default {
  created() {
    this.init();
  },
  watch: {
    currentWallet(val, old) {
      if (val) {
        this.validatorList = [];
        this.init();
      }
    },
  },
  data() {
    return {
      validatorList: [],
      delegationData: {
        list: [],
        delegateNum: '--',
        delegatePrice: '--',
        rewardNum: '--',
        rewardTotal: '--'
      }
    }
  },
  methods: {
    async init() {
      this.initStaking()
      this.initValidators()
    },
    async initStaking() {
      const address = this.currentWallet.address
      const unit = this.currentChain.unit
      const res = await this.$api('delegationList')(address, unit)
      if (!res) return
      this.delegationData = res
    },
    async initValidators() {
      const res = await this.$api('stakingValidators')()
      this.validatorList = res
    }
  }
}
