<!--
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime: 2020-02-08 16:05:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/wallet-form/index.vue
 -->
<template>
  <div>
    <van-cell-group class="mb-10">
      <van-field :label="$t('message.Name')" :placeholder="$t('message.PleaseInput')" v-model="form.name" />
      <van-field
        :label="$t('message.Address')"
        :disabled="!create"
        :placeholder="$t('message.PleaseInput')"
        rows="1"
        autosize
        type="textarea"
        v-model="form.address"
      >
        <van-icon name="scan" size="20" slot="button" v-if="create"></van-icon>
      </van-field>
    </van-cell-group>
    <van-cell :title="$t('message.MainChain')">
      <van-grid slot="label" :border="false">
        <van-grid-item
          @click="() => { form.chain = item.name }"
          v-for="item of chainList"
          :key="item.name"
          :text="item.name"
          :info="form.chain === item.name ? $t('message.Current') : null"
          style="background: #333;"
        >
          <div slot="icon" >
            <van-image width="40" height="40" :src="item.logo" />
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell>
    <div class="m-20">
      <van-button color="#333" style="user-select: none;" block @click="save">{{ $t('message.Save') }}</van-button>
      <van-button v-if="!create" plain block type="danger" style="user-select: none;margin-top: 10px;" @click="del">{{ $t('message.Delete') }}</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinLang],
  activated() {
    const { address, create } = this.$route.query;
    this.create = create;
    if (address && this.walletList[address]) {
      this.form = JSON.parse(JSON.stringify(this.walletList[address]));
    } else {
      this.form = {
        name: "",
        address: "",
        chain: "Cosmos"
      }
    }
  },
  data() {
    return {
      create: null,
      form: {
        name: "",
        address: "",
        chain: "Cosmos"
      }
    };
  },
  methods: {
    save() {
      this.$store.commit("walletListSave", this.form);
      this.$Toast('保存成功')
      this.$router.back()
    },
    del() {
      this.$store.commit("walletListDel", this.form);
      this.$Toast('删除成功')
      this.$router.back()
    }
  }
};
</script>