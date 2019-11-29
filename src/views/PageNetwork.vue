<template>
  <a-card 
      title="Block Chain Lcd Server Host Config" :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form formLayout="Vertical" @submit="handleSubmit" :form="form">
      <a-form-item
        label="Cosmoshub">
        <a-input
          v-decorator="[
            'cosmoshub',
            {rules: [{ required: true, message: 'Please input' }]}
          ]"
          name="cosmoshub"
          placeholder="https://lcd.nylira.net" />
      </a-form-item>
      <a-form-item
        label="Irishub">
        <a-input
          v-decorator="[
            'irishub',
            {rules: [{ required: true, message: 'Please input' }]}
          ]"
          name="irishub"
          placeholder="https://rpc.irisnet.org" />
      </a-form-item>
      <a-form-item
        label="Kava">
        <a-input
          v-decorator="[
            'kava',
            {rules: [{ required: true, message: 'Please input' }]}
          ]"
          name="kava"
          placeholder="https://kava-relay.01node.com" />
      </a-form-item>
      
      <a-form-item
        :wrapperCol="{ span: 24 }"
        style="text-align: left"
      >
        <a-button htmlType="submit" type="primary" style="width: 200px;">Update</a-button>
        <a-button style="width: 200px;margin-left: 8px">Reset</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BaseForm',
  data () {
    return {
      chainConfig: {},
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,
      // form
      form: this.$form.createForm(this)
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.chainConfig = await this.$localStorage.getItem('chainConfig')
      this.form.setFieldsValue({
        cosmoshub: this.chainConfig['cosmoshub'].lcd,
        irishub: this.chainConfig['irishub'].lcd,
        kava: this.chainConfig['kava'].lcd,
      })
    },
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
