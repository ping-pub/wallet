<template>
  <div>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <head-info title="Validators" :content="(validators.length || 0) + ''" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="Max Rewards" content="32%" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="Min Rewards" content="3.2%"/>
        </a-col>
      </a-row>
    </a-card>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="Validators">

      <div slot="extra">
        <a-radio-group v-model="status">
          <a-radio-button value="Active">Active</a-radio-button>
        </a-radio-group>
        <a-input-search @search="searchList" placeholder="search validator name." style="margin-left: 16px; width: 272px;" />
      </div>

      <a-list :loading="loading" >
        <a-list-item :key="index" v-for="(item, index) in validators">
          <a-list-item-meta :description="item.operator_address">
            <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
            <a-button style="padding-left: 0;font-size: 15px;" slot="title" type="link" target="_blank" :href="`https://look.ping.pub/validator/${item.operator_address}?chain=${chainId}`">{{ item.description.moniker }}</a-button>
          </a-list-item-meta>
          <div slot="actions">
            <a-button type="primary">Stake</a-button>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Tokens</span>
              <p>{{ item.tokens || '--' }}</p>
            </div>
            <div class="list-content-item">
              <span>Rewards</span>
              <p>{{ item.rewards || '--' }}</p>
            </div>
          </div>
        </a-list-item>
      </a-list>

    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'

import { mixinChain } from '@/utils/mixin'

export default {
  name: 'StandardList',
  mixins: [ mixinChain],
  components: {
    HeadInfo,
  },
  data () {
    return {
      validators: [],
      listOld: [],
      status: 'Active',
      loading: true
    }
  },
  methods: {
    init() {
      this.fetchValidators()
    },
    async fetchValidators() {
      this.loading = true
      const res = await this.$api.lrc({
        url: 'stakingValidators'
      })
      this.loading = false
      if (!res) return
      res.sort((current, next) => {
        return Number(next.tokens) - Number(current.tokens)
      })
      this.validators = res
      this.listOld = JSON.parse(JSON.stringify(res))
    },
    searchList(value, event) {
      if (value) {
        value = value.trim().toLocaleLowerCase()
        this.validators = this.listOld.filter((item) => {
          let name = item.description.moniker
          if (name) {
            name = name.toLocaleLowerCase()
          }
          return name.indexOf(value) !== -1
        })
      } else {
        this.validators = JSON.parse(JSON.stringify(this.listOld))
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .ant-avatar-lg {
        width: 48px;
        height: 48px;
        line-height: 48px;
    }

    .list-content-item {
        color: rgba(0, 0, 0, .45);
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        margin-left: 40px;
        span {
            line-height: 20px;
        }
        p {
            margin-top: 4px;
            margin-bottom: 0;
            line-height: 22px;
        }
    }
</style>
