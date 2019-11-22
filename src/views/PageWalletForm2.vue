<template>
  <div>
    <a-form :form="form" style="max-width: 500px; margin: 40px auto 0;">
      <a-alert
      showIcon
        :closable="true"
        :type="loading ? 'warning' : 'info'"
        :message="loading ? 'Please verify and sign the transaction on your Ledger' : 'Please plug in your Ledger Nano and open the Cosmos app'"
        style="margin-bottom: 10px;"
      />
      <a-alert
        :closable="true" style="margin-bottom: 10px;" type="error" message="Sending tokens failed: Unknown Status Code: undefined." showIcon />

      <a-form-item
        label="Send By"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >
      <div style="overflow-wrap: break-word;">
cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw
      </div>
        
      </a-form-item>
      <a-form-item
        label="Send To"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >
      <div style="overflow-wrap: break-word;">
cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw
      </div>
        
      </a-form-item>
      <a-divider />
      <a-form-item
        label="Subtotal"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >
        1.000000 ATOM
      </a-form-item>
      <a-form-item
        label="Network Fee"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >
        0.000915 ATOM
      </a-form-item>
      <a-divider />
      <a-form-item
        label="Total"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >
        1.000915 ATOM
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button @click="prevStep">Back</a-button>
        <a-button style="margin-left: 8px"  :loading="loading" type="primary" @click="nextStep">{{ loading ? 'Waiting for ledger' : 'Send' }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data () {
    return {
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      form: this.$form.createForm(this),
      loading: false,
      timer: 0
    }
  },
  methods: {
    nextStep () {
      const that = this
      const { form: { validateFields } } = this
      that.loading = true
      validateFields((err, values) => {
        if (!err) {
          console.log('表单 values', values)
          that.timer = setTimeout(function () {
            that.loading = false
            that.$emit('nextStep')
          }, 1500)
        } else {
          that.loading = false
        }
      })
    },
    prevStep () {
      this.$emit('prevStep')
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="less" scoped>
  .stepFormText {
    margin-bottom: 24px;

    .ant-form-item-label,
    .ant-form-item-control {
      line-height: 22px;
    }
  }

</style>
