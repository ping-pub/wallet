<template>
  <div>
    <a-form :form="form" style="max-width: 500px; margin: 40px auto 0;">
      <a-form-item
        label="Send To"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-input placeholder="Address" v-decorator="['name', { initialValue: '', rules: [{required: true, message: '收款人名称必须核对'}] }]"/>
      </a-form-item>
      <a-form-item
        label="Amount"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
       <div style="display:flex;">
          <a-input suffix="ATOM" placeholder="0.00" v-decorator="['momey', { initialValue: '', rules: [{required: true, message: '转账金额必须填写'}] }]">
        
        </a-input>

        <a-button style="margin-left: 10px;">Set Max</a-button>
       </div>
      </a-form-item>
      <a-form-item
        label="Memo"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-input placeholder="Let everyone know how much you love look" v-decorator="['name', { initialValue: '', rules: [{required: true, message: '收款人名称必须核对'}] }]"/>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button style="width: 100%;" type="primary" @click="nextStep">Next</a-button>
      </a-form-item>
    </a-form>
    <a-divider />
  </div>
</template>

<script>
export default {
  name: 'Step1',
  data () {
    return {
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      form: this.$form.createForm(this)
    }
  },
  methods: {
    nextStep () {
      const { form: { validateFields } } = this
      // 先校验，通过表单校验后，才进入下一步
      validateFields((err, values) => {
        if (!err) {
          this.$emit('nextStep')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-style-desc {
  padding: 0 56px;
  color: rgba(0,0,0,.45);

  h3 {
    margin: 0 0 12px;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
