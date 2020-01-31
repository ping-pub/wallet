export default {
  computed: {
    currentChain() {
      return this.$store.state.wallet.currentChain
    },
    currentWallet() {
      return this.$store.state.wallet.currentWallet
    },
    chainList() {
      return this.$store.state.wallet.chainList
    },
    walletList() {
      return this.$store.state.wallet.walletList
    },
    chainListWallets() {
      const chainObj = JSON.parse(JSON.stringify(this.chainList));
      const arr = [];
      for (const key in chainObj) {
        const item = chainObj[key];
        if (item.wallets && item.wallets.length > 0) {
          arr.push(item);
        }
      }
      return arr;
    }
  },
  filters: {
    shortAddress(val) {
      return val && (val.substr(0, 12) + '...' + val.substr(-12, 12)) || val 
    }
  },
  methods: {
    go(path) {
      this.$router.push(path)
    }
  }
}