<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime : 2020-02-08 19:38:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/setting-chains-form/index.vue
 -->
<template>
  <div>
    <van-cell-group class="mb-10">
      <van-field :label="$t('message.Name')" :placeholder="$t('message.PleaseInput')" v-model="form.name"/>
      <van-field label="lcd" :placeholder="$t('message.PleaseInput')" rows="1" autosize type="textarea" v-model="form.lcd">
        <van-icon name="orders-o" size="20" slot="button"></van-icon>
      </van-field>
    </van-cell-group>
    <van-cell :title="$t('message.KernelVersion')">
      <div slot="label">
        <van-radio-group v-model="form.version">
          <van-cell-group>
            <van-cell title="0.32.7" clickable @click="form.version = '0.32.7'">
              <van-radio slot="right-icon" name="0.32.7" checked-color="#333" />
            </van-cell>
            <van-cell title="0.32.1" clickable @click="form.version = '0.32.1'">
              <van-radio slot="right-icon" name="0.32.1" checked-color="#333" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-cell>
    <div class="m-20">
      <van-button style="user-select: none;" color="#333" block>{{ $t('message.Save') }}</van-button>
    </div>
  </div>
</template>

<script>

import baseMixin from '../../store/baseMixin'
import mixinLang from "./mixinLang";
export default {
  mixins: [baseMixin, mixinLang],
  created() {
    const { create, chain } = this.$route.query
    if (chain && this.chainList[chain]) {
      this.form = JSON.parse(JSON.stringify(this.chainList[chain]))
    }
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        chain: "Cosmos",
        version: '',
      },
      chains: [
        {
          name: "Cosmos",
          logo: "/static/chains/cosmoshub.svg",
          version: ""
        },
        {
          name: "Iris",
          logo: "/static/chains/irishub.svg",
          version: ""
        },
        {
          name: "Kava",
          logo: "/static/chains/kava.svg",
          version: ""
        },
        {
          name: "Other",
          logo: "/static/chains/default.png",
          version: ""
        }
      ]
    };
  }
};
</script>