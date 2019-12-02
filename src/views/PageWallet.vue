<template>
  <div class="page-header-index-wide">
  
  <div style="font-size: 16px;font-weight: bold;margin-bottom: 20px;">CosmosHub-2 <a-tag style="margin-left: 5px;">0.32.1</a-tag></div>
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

  <div style="font-size: 16px;font-weight: bold;margin-bottom: 20px;">Wallets </div>
   <a-row :gutter="24" type="flex">
             <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 20px;" v-for="(item, index) of delegations" :key="index" >
<a-card size="small" title="cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u" style="width: 100%;margin-bottom: 10px;">

            <div style="display:flex;align-items:center;" v-for="n in 3" :key="n">

              <div style="margin-right: 10px;">ATOM</div>
<trend style="margin-right: 10px;">
    <span slot="term">可用</span>
    $1233
</trend>
<trend>
    <span slot="term">总额</span>
    $1233
</trend>
            </div>
          </a-card>
     </a-col>
   </a-row>
    
  </div>
</template>

<script>
import moment from 'moment'
import { ChartCard, Trend, NumberInfo } from '@/components'
import { mixinDevice, mixinChain } from '@/utils/mixin'
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
  mixins: [mixinDevice, mixinChain],
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
      delegations: [{}, {}, {}, {}, {}, {}]
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
