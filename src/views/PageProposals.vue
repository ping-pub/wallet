<template>
  <div>
    <a-card :bordered="false" :loading="loading">
      <a-row>
        <a-col :sm="6" :xs="24">
          <head-info title="Proposals" :content="(list.length || 0) + ''" :bordered="true"/>
        </a-col>
        <a-col :sm="6" :xs="24">
          <head-info title="Passed" :content="numData['Passed'] + ''" :bordered="true"/>
        </a-col>
        <a-col :sm="6" :xs="24">
          <head-info title="Rejected" :content="numData['Rejected'] + ''" :bordered="true"/>
        </a-col>
        <a-col :sm="6" :xs="24">
          <head-info title="Voting Period" :content="numData['VotingPeriod'] + ''"/>
        </a-col>
      </a-row>
    </a-card>

    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="Proposals">

      <div slot="extra">
        <a-radio-group v-model="status" @change="changeStatus">
          <a-radio-button value="All">All</a-radio-button>
          <a-radio-button value="Passed">Passed</a-radio-button>
          <a-radio-button value="Rejected">Rejected</a-radio-button>
          <a-radio-button value="VotingPeriod">VotingPeriod</a-radio-button>
        </a-radio-group>
      </div>

      <a-list :loading="loading" >
        <a-list-item :key="index" v-for="(item, index) in list">
          <a-list-item-meta>
            <a-button style="padding-left: 0;font-size: 15px;" slot="title" type="link" target="_blank" :href="`https://look.ping.pub/proposal/${item.proposal_id}?chain=${chainId}`">{{ item.title }}</a-button>
            <div slot="description">
              <ellipsis style="font-size: 13px;"   :length="200">{{item.description}}</ellipsis>
              <div style="font-size: 13px;" >{{ item.submit_time }}</div>
            </div>
          </a-list-item-meta>
          <div slot="actions">
            <a-button type="primary">Vote</a-button>
          </div>
          <div>
            <div class="list-content-item" style="width: 100px;">
              <a-tag :color="item.proposal_status === 'Passed' ? 'green' : item.proposal_status === 'Rejected' ? 'red' : 'orange' ">{{ item.proposal_status || '--' }}</a-tag>
            </div>
          </div>
        </a-list-item>
      </a-list>

    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tools/HeadInfo'
import Ellipsis from '@/components/Ellipsis'

import { mixinChain } from '@/utils/mixin'

export default {
  mixins: [ mixinChain],
  components: {
    HeadInfo,
    Ellipsis
  },
  data () {
    return {
      list: [],
      status: 'All',
      loading: true,
      numData: {
        Passed: 0,
        Rejected: 0,
        VotingPeriod: 0
      }
    }
  },
  methods: {
    init() {
      this.fetchValidators()
    },
    async fetchValidators() {
      this.loading = true
      const res = await this.$api.lrc({
        url: 'govProposals'
      })
      this.loading = false
      if (!res) return
      const numData = {
        Passed: 0,
        Rejected: 0,
        VotingPeriod: 0
      }
      for (const item of res) {
        const { title, description } = item.proposal_content.value
        item.title = title
        item.description = description
        numData[item.proposal_status] += 1
      }
      this.numData = numData
      this.list = res
      this.listOld = JSON.parse(JSON.stringify(res))
    },
    changeStatus(e) {
      const status = e.target.value
      if (status === 'All') {
        this.list = JSON.parse(JSON.stringify(this.listOld))
        return
      }
      this.list = this.listOld.filter((item) => {
        return item.proposal_status === status
      })
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
