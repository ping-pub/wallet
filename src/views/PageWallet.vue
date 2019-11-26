<template>
  <div class="page-header-index-wide">
    <template v-if="!wallet">
    <a-alert
      message="Please add address locally."
      description="We store the address you added in the current browser."
      type="info"
      showIcon
    />
    
    <a-empty style="margin: 200px 0;" description="You haven't added an address yet."/>
</template>

  <template v-else>
  <a-row :gutter="24">
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" title="Total" :total="balance.amount || 0">
          <template slot="footer">{{ balance.denom }}</template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" title="Available ATOM" :total="8846 | NumberFormat">
          <template slot="footer">日访问量<span> {{ '1234' | NumberFormat }}</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" title="Total Rewards" :total="6560 | NumberFormat">
          <template slot="footer">转化率 <span>60%</span></template>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <chart-card :loading="loading" title="Today Rewards" total="78%">
          <template slot="footer">
            <trend flag="down" style="margin-right: 16px;">
              <span slot="term">同周比</span>
              12%
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>

    <div class="antd-pro-pages-dashboard-analysis-twoColLayout" :class="isDesktop() ? 'desktop' : ''">
      <a-row :gutter="24" type="flex">
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 20px;">
          <a-card :loading="loadingDelegations" :bordered="false" title="Delegations" :style="{ height: '100%' }">
            <div class="ant-table-wrapper">

              <a-card size="small" v-for="(item, index) of delegations" :key="index" :title="item.description && item.description.moniker" style="width: 100%;margin-bottom: 10px;">
                <a :href="`https://look.ping.pub/validator/${item.operator_address}?chain=${$store.state.wallet.id}`" target="_blank" slot="extra">details</a>
                <p>{{ item.shares }}</p>
                <p>{{ item.tokens }}</p>
                <p>{{ item.commission.rate }}</p>
              </a-card>
            </div>
          </a-card>
        </a-col>
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 20px;">
          <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :bordered="false" title="Transfer" :style="{ height: '100%' }">
            <div slot="extra" style="height: inherit;">
              <!-- style="bottom: 12px;display: inline-block;" -->
              <span class="dashboard-analysis-iconGroup">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a-icon type="ellipsis" class="ant-dropdown-link" />
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">Reset</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </span>
              <div class="analysis-salesTypeRadio">
                <a-radio-group defaultValue="a">
                  <a-radio-button value="a">Send</a-radio-button>
                  <a-radio-button value="b">Claim Rewards</a-radio-button>
                </a-radio-group>
              </div>

            </div>
            <StepForm/>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </template>
  
  </div>
</template>

<script>
import moment from 'moment'
import { ChartCard, Trend, NumberInfo } from '@/components'
import { mixinDevice } from '@/utils/mixin'
import StepForm from './PageWalletForm'

const searchTableColumns = [
  {
    dataIndex: 'description.moniker',
    title: 'Validator'
  },
  {
    dataIndex: 'shares',
    title: 'Shares',
    align: 'right',
  },
  {
    dataIndex: 'commission.rate',
    title: 'Rewards',
    align: 'right',
  },
  {
    dataIndex: 'tokens',
    title: 'Voting Power',
    align: 'right',
  }
]

export default {
  name: 'Wallet',
  mixins: [mixinDevice],
  computed: {
    wallet() {
      return this.$store.state.wallet
    }
  },
  watch: {
    wallet(val, old) {
      if (val) {
        this.init()
      }
    }
  },
  created() {
    if (this.wallet) {
      this.init()
    }
  },
  components: {
    ChartCard,
    StepForm,
    Trend,
    NumberInfo
  },
  data () {
    return {
      loading: false,
      loadingDelegations: false,
      searchTableColumns,
      balance: {},
      delegations: []
    }
  },
  methods: {
    init() {
      this.fetchBankBalances()
      this.fetchDelegations()
    },
    async fetchBankBalances() {
      this.loading = true
      const res = await this.$api.lrc({
        url: 'bankBalances'
      })
      this.loading = false
      if (!res) return
      this.balance = res[0]
    },
    async fetchDelegations() {
      this.loadingDelegations = true
      const [validators, shares] = await Promise.all(
        [
          this.$api.lrc({
            url: 'stakingDelegatorsValidators'
          }).catch(),
          this.$api.lrc({
            url: 'stakingDelegatorsDelegations'
          }).catch(),
        ]
      )
      this.loadingDelegations = false
      if (validators && shares) {
        const obj = {}
        for (const item of shares) {
          obj[item.validator_address] = item
        }
        for(const item of validators) {
          const one = obj[item.operator_address]
          item.shares = one.shares
        }
        this.delegations = validators
      }
    }
  }
}
</script>

<style>
.ant-table-scroll-position-left {
  overflow: auto
}
</style>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    /deep/ .ant-card-head {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
</style>
