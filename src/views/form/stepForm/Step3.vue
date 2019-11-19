<template>
  <div>
    <a-form style="margin: 20px auto 0;">
      <result title="Success" :is-success="true" description="Expected to arrive within two minutes" style="max-width: 560px;">
        <div class="information">
          <a-row>
            <a-col :sm="6" :xs="24">Send By:</a-col>
            <a-col :sm="18" :xs="24">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</a-col>
          </a-row>
          <a-row>
            <a-col :sm="6" :xs="24">Send To:</a-col>
            <a-col :sm="18" :xs="24">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</a-col>
          </a-row>
          <a-row>
            <a-col :sm="6" :xs="24">Subtotal:</a-col>
            <a-col :sm="18" :xs="24">1.000000 ATOM</a-col>
          </a-row>
          <a-row>
            <a-col :sm="6" :xs="24">Network Fee:</a-col>
            <a-col :sm="18" :xs="24">0.000915 ATOM</a-col>
          </a-row>
          <a-row>
            <a-col :sm="6" :xs="24">Total:</a-col>
            <a-col :sm="18" :xs="24"><span class="money">500</span> ATOM</a-col>
          </a-row>
        </div>
        <div slot="action">
          <a-button type="primary" @click="finish">Again</a-button>
          <a-button style="margin-left: 8px" @click="toOrderList">Details</a-button>
        </div>
      </result>
    </a-form>
  </div>
</template>

<script>
import { Result } from '@/components'

export default {
  name: 'Step3',
  components: {
    Result
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    },
    toOrderList () {
      this.$router.push('/list/table-list')
    }
  }
}
</script>
<style lang="less" scoped>
  .information {
    line-height: 22px;

    .ant-row:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .money {
    font-family: "Helvetica Neue",sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 14px;
  }
</style>
